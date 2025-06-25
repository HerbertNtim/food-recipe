import express from 'express';
import { ENV } from './config/env.js';

const app = express();
app.use(express.json());

const PORT = ENV.PORT 

app.get('/', (req, res) => {
  res.send('Hello, World!');  
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
