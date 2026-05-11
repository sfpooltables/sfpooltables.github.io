window.VENUES.push({
  id: "lone-star",
  name: "Lone Star Saloon",
  address: "1354 Harrison St, San Francisco, CA",
  neighborhood: "SoMa",
  lat: 37.77212561592299,
  lng: -122.4108550631019,
  tables: [
    {
      name: "Table 1",
      table_size: "7 ft",
      make: "Valley",
      cloth_color: "Red",
      images: [
        {
          src: "./images/lone-star-2024-06-01.jpg",
          alt: "Pool table at Lone Star Saloon",
        },
      ],
      review: {
        cost: {
          score: 4,
          label: "Average",
          comment: "$2 per game, $5 per 3 games",
        },
        table_condition: {
          score: 3,
          label: "Average",
        },
        cloth_condition: {
          score: 3,
          label: "Average",
        },
        rails: {
          score: 3,
          label: "Average",
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
          score: 3,
          label: "Heavy, magnet ball functional",
        },
        obstructions: {
          score: 4,
          label: "Minor obstructions",
          comment: "Shelf in play on some shots near rail",
        },
        rolloff: {
          score: 3,
          label: "Occasional rolloff",
        },
      },
      pockets: {
        label: "Normal",
      },
    },
  ],
  notes: "League play or open tournaments Tuesday night",
});
