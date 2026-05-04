window.VENUES.push({
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
          score: 5,
          label: "Excellent",
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
          comment: "Wall in play on some shots near rail",
        },
        rolloff: {
          score: 5,
          label: "No major rolloff",
        },
      },
      pockets: {
        label: "Tight",
      },
    },
  ],
  notes: "League play and tournaments most nights of the week",
});
