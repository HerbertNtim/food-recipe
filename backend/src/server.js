import express from 'express';
import { env } from './config/env.js';

const app = express();
app.use(express.json());

const PORT = env.PORT 

app.get('/', (req, res) => {
  res.send('Hello, World!');  
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
