window.VENUES.push({
  id: "kona's",
  name: "Kona's",
  address: "32 3rd St, San Francisco, CA",
  neighborhood: "SoMa",
  lat: 37.78702256166292,
  lng: -122.40325976342962,
  tables: [
    {
      name: "Table 1",
      table_size: "7 ft",
      make: "Valley",
      cloth_color: "Green",
      images: [
        {
          src: "./images/konas-2025-09-01.jpg",
          alt: "Pool table at Kona's",
        },
      ],
      review: {
        cost: {
          score: 4,
          label: "Average",
          comment: "$2 per game, $5 per 3 games",
        },
        // table_condition: {
        //   score: 1,
        //   label: "Fair",
        //   comment: "Unique furniture-style table, high slate"
        // },
        cloth_condition: {
          score: 4,
          label: "Very good",
        },
        rails: {
          score: 4,
          label: "Very good",
          // comment: "Inconsistent, some rails dead"
        },
        lighting: {
          score: 2,
          label: "Fair",
        },
        ball_condition: {
          score: 3,
          label: "Average",
          // comment: "Dirty, cakey, and missing balls"
        },
        cue_ball: {
          score: 3,
          label: "Heavy, magnet ball functional",
        },
        obstructions: {
          score: 5,
          label: "No obstructions",
          // comment: "Walls very close in on two sides",
        },
        rolloff: {
          score: 5,
          label: "Level table",
          // comment: "Table not at all level"
        },
      },
      pockets: {
        label: "Typical",
      },
    },
  ],
  // notes: "Interesting area at rear of venue",
});
