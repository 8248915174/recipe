import React from 'react';
import { useSelector } from 'react-redux';

const RecipeDetail = () => {
    const selectedRecipe = useSelector(state => state.recipes.selectedRecipe);

    if (!selectedRecipe) {
        return <div>Select a recipe to see the details.</div>;
    }

    return (
        <div className="recipe-detail">
            <h2>{selectedRecipe.label}</h2>
            <img src={selectedRecipe.image} alt={selectedRecipe.label} />
            <h3>Ingredients:</h3>
            <ul>
                {selectedRecipe.ingredientLines.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <p>{selectedRecipe.instructions}</p>
            <p><strong>Preparation Time:</strong> {selectedRecipe.totalTime} minutes</p>
            <p><strong>Serving Size:</strong> {selectedRecipe.yield} servings</p>
        </div>
    );
};

export default RecipeDetail;