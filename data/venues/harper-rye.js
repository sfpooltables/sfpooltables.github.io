window.VENUES.push({
  id: "harper-rye",
  name: "Harper & Rye",
  address: "1695 Polk St, San Francisco, CA",
  neighborhood: "Polk Gulch",
  lat: 37.79226251806323,
  lng: -122.42118592120941,
  tables: [
    {
      name: "Table 1",
      table_size: "7 ft",
      make: "Valley",
      cloth_color: "Green",
      images: [
        {
          src: "./images/harper-rye-2016-06-01.jpg",
          alt: "Pool table at Harper & Rye",
        },
      ],
      review: {
        cost: {
          score: 3,
          label: "Expensive",
          comment: "$3 per game",
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
          score: 3,
          label: "Average",
          comment: "Somewhat inconsistent"
        },
        lighting: {
          score: 2,
          label: "Fair",
        },
        ball_condition: {
          score: 3,
          label: "Good",
        },
        cue_ball: {
          score: 4,
          label: "Magnet",
        },
        obstructions: {
          score: 1,
          label: "Major obstructions",
          comment: "Pole & railing",
        },
        rolloff: {
          score: 1,
          label: "Major rolloff",
        },
      },
      pockets: {
        label: "Typical",
      },
    },
  ],
  notes: "Attractive table but expensive and plays terribly",
});
