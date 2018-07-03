

import express from 'express';

const app = express();

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.get("/api/lists", (req, res) => {
  res.json([
    {
      id: 1,
      name: 'list 1',
    },
    {
      id: 2,
      name: 'list 2',
    },
  ])
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});