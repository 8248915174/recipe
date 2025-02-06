import React from 'react';
import { useSelector } from 'react-redux';
import RecipeItem from './RecipeItem';

const Favorites = () => {
    const favoriteRecipes = useSelector(state => state.recipes.favorites);

    return (
        <div className="favorites">
            <h2>Your Favorite Recipes</h2>
            {favoriteRecipes.length === 0 ? (
                <p>No favorite recipes added yet.</p>
            ) : (
                <ul>
                    {favoriteRecipes.map(recipe => (
                        <li key={recipe.id}>
                            <RecipeItem recipe={recipe} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Favorites;