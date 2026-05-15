window.VENUES.push({
  id: "blackbird",
  name: "Blackbird",
  address: "2124 Market St, San Francisco, CA",
  neighborhood: "Castro",
  lat: 37.76725476532799,
  lng: -122.42959343061106,
  tables: [
    {
      name: "Table 1",
      table_size: "7 ft",
      make: "Unknown",
      cloth_color: "Green",
      images: [
        {
          src: "./images/blackbird-2025-07-01.jpg",
          alt: "Pool table at Blackbird",
        },
      ],
      review: {
        cost: {
          score: 4,
          label: "Average",
          comment: "$2 per game, $5 per 3 games",
        },
        table_condition: {
          score: 2,
          label: "Fair",
          comment: "Unique furniture-style table, high slate"
        },
        cloth_condition: {
          score: 2,
          label: "Fair",
        },
        rails: {
          score: 1,
          label: "Poor",
          comment: "Rails bowed in, not allowing shots down rail"
        },
        lighting: {
          score: 3,
          label: "Average",
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
          score: 5,
          label: "No obstructions",
          // comment: "Drink railing affects shots on back short rail",
        },
        rolloff: {
          score: 1,
          label: "Substantial rolloff",
        },
      },
      pockets: {
        label: "Typical",
      },
    },
  ],
  notes: "Interesting area at rear of venue",
});
