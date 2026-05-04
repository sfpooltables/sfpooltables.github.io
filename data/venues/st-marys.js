window.VENUES.push({
  id: "st-marys",
  name: "St. Mary's Pub",
  address: "3845 Mission St, San Francisco, CA",
  neighborhood: "Holly Park",
  lat: 37.7354732391938,
  lng: -122.42451846221746,
  tables: [
    {
      name: "Table 1",
      table_size: "7 ft",
      make: "Unknown",
      cloth_color: "Pink",
      images: [
        {
          src: "./images/st-marys-2024-12-01.jpg",
          alt: "Pool table at Blackbird",
        },
      ],
      review: {
        cost: {
          score: 4,
          label: "Very good",
          comment: "$1 per game",
        },
        // table_condition: {
        //   score: 1,
        //   label: "Fair",
        //   comment: "Unique furniture-style table, high slate"
        // },
        cloth_condition: {
          score: 2,
          label: "Fair",
        },
        rails: {
          score: 1,
          label: "Poor",
          // comment: "Inconsistent, some rails dead"
        },
        lighting: {
          score: 2,
          label: "Fair",
        },
        ball_condition: {
          score: 1,
          label: "Poor",
          // comment: "Dirty, cakey, and missing balls"
        },
        cue_ball: {
          score: 2,
          label: "Heavy",
        },
        obstructions: {
          score: 2,
          label: "Major obstructions",
          comment: "Walls very close in on two sides",
        },
        rolloff: {
          score: 1,
          label: "Constant rolloff",
          comment: "Table not at all level"
        },
      },
      pockets: {
        label: "Typical",
      },
    },
  ],
  // notes: "Interesting area at rear of venue",
});
