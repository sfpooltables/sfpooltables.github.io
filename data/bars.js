window.VENUES = [
  {
    id: "connecticut-yankee",
    name: "Connecticut Yankee",
    address: "100 Connecticut St, San Francisco, CA",
    neighborhood: "Potrero Hill",
    lat: 37.76494685889203,
    lng: -122.39806313165526,
    tables: [
      {
        name: "Table 1",
        table_size: "7 ft",
        make: "Valley",
        cloth_color: "Green",
        images: [
          {
            src: "./images/connecticut-yankee-2025-06-01.jpg",
            alt: "Pool table at Connecticut Yankee",
          },
          {
            src: "./images/connecticut-yankee-2023-07-01.jpg",
            alt: "Older photo of the pool table at Connecticut Yankee",
          },
        ],
        review: {
          cost: {
            score: 3,
            label: "Good",
            comment: "$2 per game, $5 per 3 games",
          },
          table_condition: {
            score: 2,
            label: "Fair",
            // comment: "Optional overall table condition comment.",
          },
          cloth_condition: {
            score: 2,
            label: "Fair",
            // comment: "Optional cloth condition comment.",
          },
          rails: {
            score: 2,
            label: "Fair",
            // comment: "Optional rail condition comment.",
          },
          lighting: {
            score: 4,
            label: "Very good",
            // comment: "Optional lighting comment.",
          },
          ball_condition: {
            score: 2,
            label: "Fair",
            // comment: "Optional ball condition comment.",
          },
          cue_ball: {
            score: 2,
            label: "Heavy",
            // comment: "Optional cue ball comment.",
          },
          obstructions: {
            score: 4,
            label: "Minor obstructions",
            comment: "Tables & chairs nearby",
          },
          rolloff: {
            score: 5,
            label: "No major rolloff",
            // comment: "Optional rolloff comment.",
          },
        },
        pockets: {
          label: "Typical",
          // comment: "Optional pocket note. Does not affect score.",
        },
      },
    ],
    notes: "Dedicated area in rear of bar"
  },
    {
    id: "happy-lounge",
    name: "Happy Lounge",
    address: "3745 Geary Blvd, San Francisco, CA",
    neighborhood: "Inner Richmond",
    lat: 37.781055863325044,
    lng: -122.45974173469814,
    tables: [
      {
        name: "Table 1",
        table_size: "7 ft",
        make: "Diamond",
        cloth_color: "Blue",
        images: [
          {
            src: "./images/happy-lounge-2025-10-01.jpg",
            alt: "Pool table at Happy Lounge",
          },
        ],
        review: {
          cost: {
            score: 5,
            label: "Excellent",
            comment: "Free",
          },
          table_condition: {
            score: 5,
            label: "Excellent",
            // comment: "Optional overall table condition comment.",
          },
          cloth_condition: {
            score: 4,
            label: "Very good",
            // comment: "Optional cloth condition comment.",
          },
          rails: {
            score: 4,
            label: "Very good",
            // comment: "Optional rail condition comment.",
          },
          lighting: {
            score: 5,
            label: "Excellent",
            // comment: "Optional lighting comment.",
          },
          ball_condition: {
            score: 3,
            label: "Good",
            // comment: "Balls get dirty quickly due to large amount of play and not as nice as the table",
          },
          cue_ball: {
            score: 5,
            label: "Standard",
            // comment: "Optional cue ball comment.",
          },
          obstructions: {
            score: 4,
            label: "Minor obstructions",
            comment: "Wall in play on some shots near rail",
          },
          rolloff: {
            score: 5,
            label: "No major rolloff",
            // comment: "Optional rolloff comment.",
          },
        },
        pockets: {
          label: "Tight",
          // comment: "Optional pocket note. Does not affect score.",
        },
      },
    ],
    notes: "League play and tournaments most nights of the week"
  }
];
