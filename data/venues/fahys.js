window.VENUES.push({
  id: "fahys",
  name: "Fahy's Fog & Barrel",
  address: "684 Commercial St, San Francisco, CA",
  neighborhood: "Chinatown",
  lat: 37.794154629254194,
  lng: -122.40438949159201,
  tables: [
    {
      name: "Table 1",
      table_size: "7 ft",
      rating_date: "May 2026",
      make: "Diamond",
      cloth_color: "Blue",
      images: [
        {
          src: "./images/fahys-2026-05-15.jpg",
          alt: "Pool table at Fahy's",
        },
      ],
      review: {
        cost: {
          score: 4,
          label: "Average",
          comment: "$2 per game",
        },
        table_condition: {
          score: 5,
          label: "Excellent",
        },
        cloth_condition: {
          score: 4,
          label: "Very good",
        },
        rails: {
          score: 5,
          label: "Excellent",
        },
        lighting: {
          score: 5,
          label: "Excellent",
        },
        ball_condition: {
          score: 4,
          label: "Very good",
        },
        cue_ball: {
          score: 5,
          label: "Standard",
        },
        obstructions: {
          score: 3,
          label: "Moderate obstructions",
          comment: "Wall in play on one long rail",
        },
        rolloff: {
          score: 5,
          label: "Level table",
        },
      },
      pockets: {
        label: "Tight",
      },
    },
  ],
  // notes: "League play and tournaments most nights of the week",
});
