window.VENUES.push({
  id: "sea-star",
  name: "The Sea Star",
  address: "2289 3rd St, San Francisco, CA",
  neighborhood: "Dogpatch",
  lat: 37.76074197035715,
  lng: -122.38839851554926,
  tables: [
    {
      name: "Table 1",
      table_size: "7 ft",
      make: "Valley",
      cloth_color: "Black",
      images: [
        {
          src: "./images/sea-star-2025-05-01.jpg",
          alt: "Pool table at the Sea Star",
        },
      ],
      review: {
        cost: {
          score: 3,
          label: "Good",
          comment: "$2 per game, $5 per 3 games",
        },
        table_condition: {
          score: 3,
          label: "Good",
        },
        cloth_condition: {
          score: 2,
          label: "Fair",
        },
        rails: {
          score: 2,
          label: "Fair",
        },
        lighting: {
          score: 2,
          label: "Fair",
        },
        ball_condition: {
          score: 2,
          label: "Fair",
        },
        cue_ball: {
          score: 2,
          label: "Heavy",
        },
        obstructions: {
          score: 4,
          label: "Minor obstructions",
          comment: "Drink railing affects shots on back short rail",
        },
        rolloff: {
          score: 3,
          label: "Moderate rolloff",
        },
      },
      pockets: {
        label: "Typical",
      },
    },
  ],
  notes: "Bathrooms nearby and not much seating near table",
});
