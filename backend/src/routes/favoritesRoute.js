import express from 'express';
import { addFavorites, deleteFavorites } from '../controllers/favoritesController.js';

const favoritesRoute = express.Router();

favoritesRoute.post('/favorites', addFavorites);
favoritesRoute.delete('/favorites/:userId/:recipeId', deleteFavorites);

export default favoritesRoute;
