import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './redux/store';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import SearchBar from './components/SearchBar';
import Favorites from './components/Favorites';
import Filters from './components/Filters';
import './styles/App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <SearchBar />
          <Filters />
          <Switch>
            <Route path="/" exact component={RecipeList} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/recipe/:id" component={RecipeDetail} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;