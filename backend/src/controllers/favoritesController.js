import { favoritesTable } from "../db/schema";
import { db } from "../config/db.js";

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
