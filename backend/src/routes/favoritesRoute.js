import express from 'express';
import { addFavorites } from '../controllers/favoritesController';

const favoritesRoute = express.Router();

favoritesRoute.get('/favorites', addFavorites);
