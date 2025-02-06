export const FETCH_RECIPES_REQUEST = 'FETCH_RECIPES_REQUEST';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const APPLY_FILTER = 'APPLY_FILTER';

export const fetchRecipesRequest = () => ({
    type: FETCH_RECIPES_REQUEST,
});

export const fetchRecipesSuccess = (recipes) => ({
    type: FETCH_RECIPES_SUCCESS,
    payload: recipes,
});

export const fetchRecipesFailure = (error) => ({
    type: FETCH_RECIPES_FAILURE,
    payload: error,
});

export const addFavorite = (recipe) => ({
    type: ADD_FAVORITE,
    payload: recipe,
});

export const removeFavorite = (recipeId) => ({
    type: REMOVE_FAVORITE,
    payload: recipeId,
});

export const applyFilter = (filter) => ({
    type: APPLY_FILTER,
    payload: filter,
});

export const fetchRecipes = (query) => {
    return async (dispatch) => {
        dispatch(fetchRecipesRequest());
        try {
            const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=a5de3521&app_key=28f8a20bd89362740e68d4bbb349b977&from=0&to=50`);
            const data = await response.json();
            dispatch(fetchRecipesSuccess(data.hits));
        } catch (error) {
            dispatch(fetchRecipesFailure(error.message));
        }
    };
};