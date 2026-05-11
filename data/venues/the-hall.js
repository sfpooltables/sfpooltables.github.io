window.VENUES.push({
  id: "the-hall",
  name: "The Hall",
  address: "2565 Mission St, San Francisco, CA",
  neighborhood: "Mission",
  lat: 37.75610226938087,
  lng: -122.41865780299555,
  table_count: 6,
  tables: [
    {
      name: "Table 1",
      table_size: "7 ft",
      make: "Diamond",
      cloth_color: "Gray",
      images: [
        {
          src: "./images/the-hall-2025-08-01.jpg",
          alt: "Pool table at The Hall",
        },
      ],
      review: {
        cost: {
          score: 3,
          label: "Expensive",
          comment: "$15 per hour",
        },
        // table_condition: {
        //   score: 1,
        //   label: "Fair",
        //   comment: "Unique furniture-style table, high slate"
        // },
        cloth_condition: {
          score: 5,
          label: "Excellent",
        },
        rails: {
          score: 5,
          label: "Excellent",
          // comment: "Inconsistent, some rails dead"
        },
        lighting: {
          score: 5,
          label: "Excellent",
        },
        ball_condition: {
          score: 4,
          label: "Very good",
          // comment: "Dirty, cakey, and missing balls"
        },
        cue_ball: {
          score: 5,
          label: "Standard",
        },
        obstructions: {
          score: 5,
          label: "No obstructions",
          // comment: "Walls very close in on two sides",
        },
        rolloff: {
          score: 5,
          label: "No rolloff",
          // comment: "Table not at all level"
        },
      },
      pockets: {
        label: "Tight",
      },
    },
  ],
  notes: "Six bar tables of similar quality",
});
