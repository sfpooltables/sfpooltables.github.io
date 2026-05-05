window.VENUES.push({
  id: "philosophers-club",
  name: "Philosopher's Club",
  address: "824 Ulloa St, San Francisco, CA",
  neighborhood: "West Portal",
  lat: 37.740836873078585,
  lng: -122.46546323632334,
  tables: [
    {
      name: "Table 1",
      table_size: "7 ft",
      make: "Unknown",
      cloth_color: "Green",
      images: [
        {
          src: "./images/philosophers-club-2024-05-01.jpg",
          alt: "Pool table at Blackbird",
        },
      ],
      review: {
        cost: {
          score: 2.5,
          label: "Typical",
          comment: "$2 per game",
        },
        table_condition: {
          score: 2,
          label: "Fair",
          // comment: "Unique furniture-style table, high slate"
        },
        cloth_condition: {
          score: 2,
          label: "Fair",
        },
        rails: {
          score: 1,
          label: "Poor",
          comment: "Inconsistent, some rails dead"
        },
        lighting: {
          score: 4,
          label: "Very good",
        },
        ball_condition: {
          score: 1,
          label: "Poor",
          comment: "Dirty, cakey, and missing balls"
        },
        cue_ball: {
          score: 2,
          label: "Heavy",
        },
        obstructions: {
          score: 4,
          label: "Minor obstructions",
          comment: "Tables nearby and foot traffic",
        },
        rolloff: {
          score: 2,
          label: "Major rolloff",
        },
      },
      pockets: {
        label: "Typical",
      },
    },
  ],
  // notes: "Interesting area at rear of venue",
});
