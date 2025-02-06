import React from 'react';

const RecipeItem = ({ recipe, onSelect }) => {
    return (
        <div className="recipe-item" onClick={() => onSelect(recipe)}>
            <h3>{recipe.label}</h3>
            <img src={recipe.image} alt={recipe.label} />
            <p>{recipe.description}</p>
        </div>
    );
};

export default RecipeItem;