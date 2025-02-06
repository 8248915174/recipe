import axios from 'axios';

const APP_ID = 'a5de3521';
const APP_KEY = '28f8a20bd89362740e68d4bbb349b977';
const BASE_URL = 'https://api.edamam.com/search';

export const fetchRecipes = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=50`);
        return response.data.hits.map(hit => hit.recipe);
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error;
    }
};