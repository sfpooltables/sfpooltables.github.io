window.VENUES.push({
  id: "showdown",
  name: "The Showdown",
  address: "1268 Grant Ave, San Francisco, CA",
  neighborhood: "North Beach",
  lat: 37.79868617093885,
  lng: -122.40711593544165,
  tables: [
    {
      name: "Table 1",
      table_size: "7 ft",
      rating_date: "May 2026",
      make: "Valley",
      cloth_color: "49ers (red & gold)",
      images: [
        {
          src: "./images/showdown-2026-05-15.jpg",
          alt: "Pool table at the Showdown",
        },
      ],
      review: {
        cost: {
          score: 4,
          label: "Average",
          comment: "$2 per game, $5 per 3 games, $20 per hour",
        },
        table_condition: {
          score: 4,
          label: "Very good",
          // comment: "Unique furniture-style table, high slate"
        },
        cloth_condition: {
          score: 2,
          label: "Fair",
          comment: "Clean but very thick and nappy"
        },
        rails: {
          score: 4,
          label: "Very good",
          // comment: "Inconsistent, some rails dead"
        },
        lighting: {
          score: 3,
          label: "Average",
        },
        ball_condition: {
          score: 4,
          label: "Very good",
          // comment: "Dirty, cakey, and missing balls"
        },
        cue_ball: {
          score: 3,
          label: "Heavy, magnet ball functional",
        },
        obstructions: {
          score: 3,
          label: "Moderate obstructions",
          comment: "Wall on long rail",
        },
        rolloff: {
          score: 1,
          label: "Major rolloff",
          comment: "Almost unplayable"
        },
      },
      pockets: {
        label: "Typical",
      },
    },
  ],
  notes: "Strange looking table with awful rolloff",
});
