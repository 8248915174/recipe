import { FETCH_RECIPES, ADD_FAVORITE, REMOVE_FAVORITE, APPLY_FILTER } from '../actions/types';

const initialState = {
    recipes: [],
    favorites: [],
    filters: {
        category: '',
        dietaryRestrictions: []
    }
};

const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RECIPES:
            return {
                ...state,
                recipes: action.payload
            };
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(recipe => recipe.id !== action.payload.id)
            };
        case APPLY_FILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    ...action.payload
                }
            };
        default:
            return state;
    }
};

export default recipeReducer;