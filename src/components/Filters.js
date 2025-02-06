import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions/recipeActions';

const Filters = () => {
    const dispatch = useDispatch();

    const handleFilterChange = (event) => {
        dispatch(setFilter(event.target.value));
    };

    return (
        <div className="filters">
            <h3>Filter Recipes</h3>
            <select onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="gluten-free">Gluten-Free</option>
            </select>
        </div>
    );
};

export default Filters;