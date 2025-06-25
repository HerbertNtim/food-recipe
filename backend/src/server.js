import express from 'express';
import { ENV } from './config/env.js';
import favoritesRoute from './routes/favoritesRoute.js';

const app = express();
app.use(express.json());

const PORT = ENV.PORT 

app.get('/', (req, res) => {
  res.send('Hello, World!');  
});

app.use('/', favoritesRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
