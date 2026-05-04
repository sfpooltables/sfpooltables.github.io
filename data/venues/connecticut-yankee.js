window.VENUES.push({
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
        },
        cloth_condition: {
          score: 2,
          label: "Fair",
        },
        rails: {
          score: 2,
          label: "Fair",
        },
        lighting: {
          score: 4,
          label: "Very good",
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
          score: 4,
          label: "Minor obstructions",
          comment: "Tables & chairs nearby",
        },
        rolloff: {
          score: 5,
          label: "No major rolloff",
        },
      },
      pockets: {
        label: "Typical",
      },
    },
  ],
  notes: "Dedicated area in rear of bar",
});
