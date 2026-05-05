window.VENUES.push({
  id: "karls-beacon",
  name: "Karl's Beacon",
  address: "1355 Taraval St, San Francisco, CA",
  neighborhood: "Parkside",
  lat: 37.74270982499852,
  lng: -122.48090116072102,
  tables: [
    {
      name: "Table 1",
      table_size: "7 ft",
      make: "Valley",
      cloth_color: "Green",
      images: [
        {
          src: "./images/karls-beacon-2025-07-01.jpg",
          alt: "Pool table at Karl's Beacon",
        },
      ],
      review: {
        cost: {
          score: 3.5,
          label: "Typical",
          comment: "$1.50 per game",
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
          score: 3,
          label: "Good",
        },
        lighting: {
          score: 3,
          label: "Good",
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
          score: 5,
          label: "No obstructions",
          // comment: "Drink railing affects shots on back short rail",
        },
        rolloff: {
          score: 4,
          label: "Minor rolloff",
        },
      },
      pockets: {
        label: "Typical",
      },
    },
  ],
  notes: "Table in rear, coins only",
});
