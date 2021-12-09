import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Drinks from './pages/Drinks';
import Foods from './pages/Foods';
import RecipeDetails from './pages/RecipeDetails';
import RecipeInProgress from './pages/RecipeInProgress';
import Explorer from './pages/Explorer';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoodsByIngredients from './pages/ExploreFoodsByIngredients';
import ExploreDrinksByIngredients from './pages/ExploreDrinksByIngredients';
import ExploreFoodsByOrigin from './pages/ExploreFoodsByOrigin';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={ Login } />
      <Route exact path="/comidas" render={ Foods } />
      <Route exact path="/bebidas" render={ Drinks } />
      <Route path="/comidas/:recipeId" render={ RecipeDetails } />
      <Route path="/bebidas/:drinkId" render={ RecipeDetails } />
      <Route path="/comidas/:recipeId/in-progress" render={ RecipeInProgress } />
      <Route path="/bebidas/:drinkId/in-progress" render={ RecipeInProgress } />
      <Route exact path="/explorar" render={ Explorer } />
      <Route exact path="/explorar/comidas" render={ ExploreFoods } />
      <Route exact path="/explorar/bebidas" render={ ExploreDrinks } />
      <Route
        path="/explorar/comidas/ingredientes"
        component={ ExploreFoodsByIngredients }
      />
      <Route
        path="/explorar/bebidas/ingredientes"
        component={ ExploreDrinksByIngredients }
      />
      <Route path="/explorar/comidas/area" component={ ExploreFoodsByOrigin } />
      <Route path="/perfil" component={ Profile } />
      <Route path="/receitas-feitas" component={ DoneRecipes } />
      <Route path="/receitas-favoritas" component={ FavoriteRecipes } />

    </Switch>
  );
}

export default App;
