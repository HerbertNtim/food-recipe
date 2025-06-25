import { favoritesTable } from "../db/schema.js";
import { db } from "../config/db.js";
import { eq, and } from "drizzle-orm";

export const addFavorites = async (req, res) => {
  const { userId, recipeId, title, image, cookTime, servings } = req.body; 
  try {
    if (!userId || !recipeId || !title || !image || !cookTime || !servings) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const favorites = await db.insert(favoritesTable).values({
      userId,
      recipeId,
      title,
      image,
      cookTime,
      servings
    }).returning();

    return res.status(201).json(favorites[0]);
  } catch (error) {
    console.error('Error adding favorite:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

export const deleteFavorites = async (req, res) => {
  const { userId, recipeId } = req.params;
  try {
    if (!userId || !recipeId) {
      return res.status(400).json({ message: 'User ID and Recipe ID are required' });
    }
    
    const result = await db.delete(favoritesTable).where( and(eq(favoritesTable.userId, userId), eq(favoritesTable.recipeId, parseInt(recipeId)))).returning();

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Favorite not found' });
    }

    return res.status(200).json({ message: 'Favorite deleted successfully' });
  } catch (error) {
    console.error('Error deleting favorite:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
