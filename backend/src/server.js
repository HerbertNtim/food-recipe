import express from 'express';
import { ENV } from './config/env.js';
import favoritesRoute from './routes/favoritesRoute.js';
import job from './config/cron.js';

const app = express();
app.use(express.json());

const PORT = ENV.PORT 

if (ENV.NODE_ENV === "production") job.start();


app.get("/api/health", (req, res) => {
  res.status(200).json({ success: true });
});

app.use('/food', favoritesRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
