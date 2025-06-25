import express from 'express';
import { addFavorites, deleteFavorites, getFavorites } from '../controllers/favoritesController.js';

const favoritesRoute = express.Router();

favoritesRoute.get('/favorites/:userId', getFavorites)
favoritesRoute.post('/favorites', addFavorites);
favoritesRoute.delete('/favorites/:userId/:recipeId', deleteFavorites);

export default favoritesRoute;
