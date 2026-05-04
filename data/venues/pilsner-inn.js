window.VENUES.push({
  id: "pilsner-inn",
  name: "Pilsner Inn",
  address: "225 Church St, San Francisco, CA",
  neighborhood: "Castro",
  lat: 37.76711018055059,
  lng: -122.4287903914749,
  tables: [
    {
      name: "Table 1",
      table_size: "7 ft",
      make: "Dynamo",
      cloth_color: "Green",
      images: [
        {
          src: "./images/pilsner-inn-2023-06-01.jpg",
          alt: "Pool table at Pilsner Inn",
        },
      ],
      review: {
        cost: {
          score: 3,
          label: "Good",
          comment: "$2 per game, $5 per 3 games",
        },
        table_condition: {
          score: 4,
          label: "Very good",
        },
        cloth_condition: {
          score: 4,
          label: "Very good",
        },
        rails: {
          score: 4,
          label: "Very good",
        },
        lighting: {
          score: 4,
          label: "Very good",
        },
        ball_condition: {
          score: 3,
          label: "Good",
        },
        cue_ball: {
          score: 5,
          label: "Standard",
        },
        obstructions: {
          score: 4,
          label: "Minor obstructions",
          comment: "Shelf and pole in play on some shots near rail",
        },
        rolloff: {
          score: 5,
          label: "No major rolloff",
        },
      },
      pockets: {
        label: "Normal",
      },
    },
  ],
  notes: "League play Tuesday night",
});
