import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRecipes } from '../redux/actions/recipeActions';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query) {
            dispatch(fetchRecipes(query));
            setQuery('');
        }
    };

    return (
        <form onSubmit={handleSearch} className="search-bar">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for recipes..."
                className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    );
};

export default SearchBar;