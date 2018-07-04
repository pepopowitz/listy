import express from 'express';
import routes from './api/routes.js';

const app = express();
app.set("port", process.env.PORT || 3001);

app.use('/', routes);

app.listen(app.get("port"), () => {
  console.log(`API is listening at http://localhost:${app.get("port")}/`);
});
