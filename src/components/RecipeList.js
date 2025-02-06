import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes }) => {
    return (
        <div className="recipe-list">
            {recipes.map(recipe => (
                <RecipeItem key={recipe.uri} recipe={recipe} />
            ))}
        </div>
    );
};

export default RecipeList;