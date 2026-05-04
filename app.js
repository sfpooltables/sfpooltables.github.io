const MAP_CENTER = [37.7749, -122.4194];
const MAP_ZOOM = 12;

const map = L.map("map").setView(MAP_CENTER, MAP_ZOOM);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const venueList = document.getElementById("venue-list");
const venueCount = document.getElementById("venue-count");
const sortSelect = document.getElementById("sort-select");
const details = document.getElementById("details");
const previewWarning = document.getElementById("preview-warning");
const REVIEW_CATEGORIES = [
  { key: "cost", label: "Cost", maxScore: 5 },
  { key: "table_condition", label: "Table Condition", maxScore: 5 },
  { key: "cloth_condition", label: "Cloth Condition", maxScore: 5 },
  { key: "rails", label: "Rail Condition", maxScore: 5 },
  { key: "lighting", label: "Lighting", maxScore: 5 },
  { key: "ball_condition", label: "Ball Condition", maxScore: 5 },
  { key: "cue_ball", label: "Cue Ball", maxScore: 5 },
  { key: "obstructions", label: "Obstructions", maxScore: 5 },
  { key: "rolloff", label: "Rolloff", maxScore: 5 },
];

let venues = [];
let selectedVenueId = null;
const markersById = new Map();
let totalTableCount = 0;

if (window.location.protocol === "file:") {
  previewWarning.hidden = false;
  previewWarning.textContent =
    "Map tiles may be blocked in direct file preview. Open the site through GitHub Pages or a local web server such as http://localhost:8000/.";
}

function sortVenues(items, mode) {
  const sorted = [...items];

  if (mode === "name") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
  }

  sorted.sort((a, b) => {
    if (b.rating !== a.rating) {
      return b.rating - a.rating;
    }

    return a.name.localeCompare(b.name);
  });

  return sorted;
}

function computeRating(review) {
  const scores = REVIEW_CATEGORIES.map(({ key }) => review?.[key]?.score).filter(
    (score) => typeof score === "number"
  );

  if (scores.length === 0) {
    return 0;
  }

  return scores.reduce((sum, score) => sum + score, 0) / scores.length;
}

function formatTableCount(count) {
  return `${count} table${count === 1 ? "" : "s"}`;
}

function computeVenueRating(tables) {
  if (!Array.isArray(tables) || tables.length === 0) {
    return 0;
  }

  return Math.max(...tables.map((table) => table.rating));
}

function normalizeVenues(items) {
  const normalizedVenues = items.map((venue) => {
    const tables = (venue.tables || []).map((table, index) => ({
      ...table,
      id: table.id || `${venue.id}-table-${index + 1}`,
      name: table.name || `Table ${index + 1}`,
      rating: computeRating(table.review),
    }));

    return {
      ...venue,
      tables,
      rating: computeVenueRating(tables),
    };
  });

  const rankedTables = normalizedVenues
    .flatMap((venue) => venue.tables)
    .sort((a, b) => b.rating - a.rating);

  totalTableCount = rankedTables.length;
  rankedTables.forEach((table, index) => {
    const previousTable = rankedTables[index - 1];
    table.rank =
      previousTable && previousTable.rating === table.rating
        ? previousTable.rank
        : index + 1;
  });

  return normalizedVenues;
}

function reviewBlockHtml(item, label) {
  const comment = item.comment
    ? `<p class="detail-comment">${item.comment}</p>`
    : "";

  return `
    <div class="detail-block">
      <span class="detail-label">${label}</span>
      <strong>${item.label} (${item.score}/5)</strong>
      ${scoreMeterHtml(item.score)}
      ${comment}
    </div>
  `;
}

function scoreMeterHtml(score) {
  const percent = Math.max(0, Math.min(100, (score / 5) * 100));

  return `
    <div class="score-meter" aria-label="${score.toFixed(1)} out of 5">
      <span style="width: ${percent}%; background: ${markerColor(score)}"></span>
    </div>
  `;
}

function infoBlockHtml(item, label) {
  if (!item) {
    return "";
  }

  const comment = item.comment
    ? `<p class="detail-comment">${item.comment}</p>`
    : "";

  return `
    <div class="detail-block">
      <span class="detail-label">${label}</span>
      <strong>${item.label}</strong>
      ${comment}
    </div>
  `;
}

function markerColor(rating) {
  if (rating >= 4.5) {
    return "#1f7a4d";
  }

  if (rating >= 3.75) {
    return "#5c8f2f";
  }

  if (rating >= 3) {
    return "#c3921a";
  }

  if (rating >= 2) {
    return "#b85f24";
  }

  return "#9f2f2f";
}

function popupHtml(venue) {
  return `
    <h3>${venue.name}</h3>
    <p>${venue.address}</p>
    <p><strong>Rating:</strong> ${venue.rating.toFixed(1)}/5</p>
    <p><strong>Tables:</strong> ${formatTableCount(venue.tables.length)}</p>
  `;
}

function photoCaptionHtml(image) {
  const parts = [];
  const taken = image.taken || photoDateFromPath(image.src);

  if (image.caption) {
    parts.push(image.caption);
  }

  if (taken) {
    parts.push(`Photo taken: ${taken}`);
  }

  return parts.length > 0 ? `<figcaption>${parts.join(" ")}</figcaption>` : "";
}

function photoDateFromPath(src) {
  const match = src.match(/(\d{4}-\d{2}-\d{2})(?=\.[a-z0-9]+$)/i);
  return match ? match[1] : "";
}

function tablePhotosHtml(table) {
  const images = table.images || (table.image ? [table.image] : []);

  if (images.length === 0) {
    return "";
  }

  const slides = images
    .map(
      (image, index) => `
        <figure class="table-photo-slide ${index === 0 ? "active" : ""}" data-slide-index="${index}">
          <img src="${image.src}" alt="${image.alt}" loading="lazy" />
          ${photoCaptionHtml(image)}
        </figure>
      `
    )
    .join("");
  const controls =
    images.length > 1
      ? `
        <div class="carousel-controls" aria-label="Photo controls">
          <button class="carousel-button" type="button" data-carousel-direction="prev">Previous</button>
          <span class="carousel-count">1 / ${images.length}</span>
          <button class="carousel-button" type="button" data-carousel-direction="next">Next</button>
        </div>
      `
      : "";

  return `
    <div class="table-photo-carousel" data-carousel>
      ${slides}
      ${controls}
    </div>
  `;
}

function tableDetailsHtml(table, showTableName) {
  const reviewBlocks = REVIEW_CATEGORIES.map(({ key, label }) =>
    reviewBlockHtml(table.review[key], label)
  ).join("");
  const pocketsBlock = infoBlockHtml(table.pockets, "Pockets");
  const tableNameHtml = showTableName ? `<h4>${table.name}</h4>` : "";
  const imageHtml = tablePhotosHtml(table);

  return `
    <article class="table-card">
      ${tableNameHtml}
      <div class="details-grid">
        <div class="detail-block">
          <span class="detail-label">Table Rating</span>
          <strong>${table.rating.toFixed(1)}/5, #${table.rank}/${totalTableCount} tables</strong>
          ${scoreMeterHtml(table.rating)}
        </div>
        <div class="detail-block">
          <span class="detail-label">Table Size</span>
          <strong>${table.table_size}</strong>
        </div>
        <div class="detail-block">
          <span class="detail-label">Make</span>
          <strong>${table.make}</strong>
        </div>
        <div class="detail-block">
          <span class="detail-label">Cloth Color</span>
          <strong>${table.cloth_color}</strong>
        </div>
        ${pocketsBlock}
      </div>
      <div class="review-section">
        <span class="detail-label">Score Breakdown</span>
        <div class="details-grid">
          ${reviewBlocks}
        </div>
      </div>
      ${imageHtml}
    </article>
  `;
}

function detailsHtml(venue) {
  const showTableNames = venue.tables.length > 1;
  const tableCards = venue.tables
    .map((table) => tableDetailsHtml(table, showTableNames))
    .join("");

  return `
    <article class="details-card">
      <h3>${venue.name}</h3>
      <p class="details-address">${venue.address}</p>
      <div class="details-grid">
        <div class="detail-block">
          <span class="detail-label">Neighborhood</span>
          <strong>${venue.neighborhood}</strong>
        </div>
        <div class="detail-block">
          <span class="detail-label">Table Count</span>
          <strong>${formatTableCount(venue.tables.length)}</strong>
        </div>
      </div>
      <div class="tables-section">
        <span class="detail-label">Table Reviews</span>
        <div class="table-list">
          ${tableCards}
        </div>
      </div>
      <div class="notes">
        <span class="detail-label">Venue Notes</span>
        <p>${venue.notes}</p>
      </div>
    </article>
  `;
}

function setActiveListItem() {
  const buttons = document.querySelectorAll(".venue-item");
  buttons.forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.venueId === selectedVenueId
    );
  });
}

function renderDetails() {
  const venue = venues.find((item) => item.id === selectedVenueId);

  if (!venue) {
    details.className = "details-empty";
    details.textContent = "Select a venue to inspect its pool table review.";
    return;
  }

  details.className = "";
  details.innerHTML = detailsHtml(venue);
  bindCarousels();
}

function bindCarousels() {
  details.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll(".table-photo-slide"));
    const count = carousel.querySelector(".carousel-count");

    if (slides.length < 2) {
      return;
    }

    let activeIndex = 0;

    function showSlide(nextIndex) {
      activeIndex = (nextIndex + slides.length) % slides.length;
      slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === activeIndex);
      });
      count.textContent = `${activeIndex + 1} / ${slides.length}`;
    }

    carousel.querySelectorAll("[data-carousel-direction]").forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.dataset.carouselDirection;
        showSlide(activeIndex + (direction === "next" ? 1 : -1));
      });
    });
  });
}

function selectVenue(venueId, openPopup = true) {
  selectedVenueId = venueId;
  setActiveListItem();
  renderDetails();

  const venue = venues.find((item) => item.id === venueId);
  const marker = markersById.get(venueId);

  if (!venue || !marker) {
    return;
  }

  map.flyTo([venue.lat, venue.lng], Math.max(map.getZoom(), 14), {
    duration: 0.4,
  });

  if (openPopup) {
    marker.openPopup();
  }
}

function renderList() {
  const sortedVenues = sortVenues(venues, sortSelect.value);
  venueCount.textContent = `${sortedVenues.length} venues listed`;

  venueList.innerHTML = sortedVenues
    .map(
      (venue) => `
        <li>
          <button class="venue-item" data-venue-id="${venue.id}" type="button">
            <div class="venue-item-title">
              <strong>${venue.name}</strong>
              <span class="rating-pill">${venue.rating.toFixed(1)}</span>
            </div>
            <p>${venue.neighborhood} · ${formatTableCount(venue.tables.length)}</p>
          </button>
        </li>
      `
    )
    .join("");

  venueList.querySelectorAll(".venue-item").forEach((button) => {
    button.addEventListener("click", () => {
      selectVenue(button.dataset.venueId);
    });
  });

  setActiveListItem();
}

function addMarkers() {
  venues.forEach((venue) => {
    const marker = L.circleMarker([venue.lat, venue.lng], {
      radius: 9,
      fillColor: markerColor(venue.rating),
      color: "#fffdf8",
      weight: 2,
      opacity: 1,
      fillOpacity: 0.9,
    })
      .addTo(map)
      .bindPopup(popupHtml(venue));

    marker.on("click", () => {
      selectVenue(venue.id, false);
    });

    markersById.set(venue.id, marker);
  });
}

async function loadVenues() {
  try {
    if (!Array.isArray(window.VENUES)) {
      throw new Error("VENUES data is missing");
    }

    venues = normalizeVenues(window.VENUES);
    addMarkers();
    renderList();
  } catch (error) {
    venueCount.textContent = "Could not load venue data.";
    details.className = "details-empty";
    details.textContent =
      "The site could not read venue data. Check data/venues.js and the files in data/venues/.";
    console.error(error);
  }
}

sortSelect.addEventListener("change", () => {
  renderList();
});

loadVenues();
