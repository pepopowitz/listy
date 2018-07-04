import express from 'express';
import dotenv from 'dotenv';
import routes from './api/routes.js';

dotenv.config();

const app = express();
app.set("port", process.env.PORT || 3001);

app.use('/', routes);

app.listen(app.get("port"), () => {
  console.log(`API is listening at http://localhost:${app.get("port")}/`);
});
