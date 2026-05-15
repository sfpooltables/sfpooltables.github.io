window.VENUES.push({
  id: "savoy-tivoli",
  name: "The Savoy Tivoli",
  address: "1434 Grant Ave, San Francisco, CA",
  neighborhood: "North Beach",
  lat: 37.80026920331791,
  lng: -122.40744446105309,
  tables: [
    {
      name: "Table 1",
      table_size: "8 ft",
      rating_date: "May 2026",
      make: "Global",
      cloth_color: "Green",
      images: [
        {
          src: "./images/savoy-tivoli-2026-05-15.jpg",
          alt: "Pool table at the Savoy Tivoli",
        },
      ],
      review: {
        cost: {
          score: 5,
          label: "Free",
          // comment: "$2 per game, $5 per 3 games, $20 per hour",
        },
        table_condition: {
          score: 3,
          label: "Average",
          // comment: "Unique furniture-style table, high slate"
        },
        cloth_condition: {
          score: 2,
          label: "Fair",
          // comment: "Clean but very thick and nappy"
        },
        rails: {
          score: 3,
          label: "Average",
          // comment: "Inconsistent, some rails dead"
        },
        lighting: {
          score: 3,
          label: "Average",
        },
        ball_condition: {
          score: 2,
          label: "Fair",
          // comment: "Dirty, cakey, and missing balls"
        },
        cue_ball: {
          score: 5,
          label: "Standard",
        },
        obstructions: {
          score: 2,
          label: "Major obstructions",
          comment: "Walls affect shots on 2 rails",
        },
        rolloff: {
          score: 3,
          label: "Occasional rolloff",
          // comment: "Almost unplayable"
        },
      },
      pockets: {
        label: "Large",
      },
    },
  ],
  notes: "Nice area in back room of bar, table has room not to be obstructed but sited incorrectly",
});
