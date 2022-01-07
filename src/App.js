import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Drinks from './pages/Drinks';
import Foods from './pages/Foods';
import RecipeInProgress from './pages/RecipeInProgress';
import Explorer from './pages/Explorer';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreByIngredients from './pages/ExploreByIngredients';
import ExploreFoodsByOrigin from './pages/ExploreFoodsByOrigin';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import FoodDetails from './pages/FoodDetails';
import DrinkDetails from './pages/DrinkDetails';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Foods } />
      <Route exact path="/bebidas" component={ Drinks } />
      <Route exact path="/comidas/:recipeId" component={ FoodDetails } />
      <Route exact path="/bebidas/:drinkId" component={ DrinkDetails } />
      <Route exact path="/comidas/:recipeId/in-progress" component={ RecipeInProgress } />
      <Route
        path="/bebidas/:drinkId/in-progress"
        render={ () => (
          <DrinkDetails makingRecipe />
        ) }
      />
      <Route exact path="/explorar" component={ Explorer } />
      <Route exact path="/explorar/comidas" component={ ExploreFoods } />
      <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
      <Route
        path="/explorar/comidas/ingredientes"
        component={ ExploreByIngredients }
      />
      <Route
        path="/explorar/bebidas/ingredientes"
        component={ ExploreByIngredients }
      />
      <Route path="/explorar/comidas/area" component={ ExploreFoodsByOrigin } />
      <Route path="/perfil" component={ Profile } />
      <Route path="/receitas-feitas" component={ DoneRecipes } />
      <Route path="/receitas-favoritas" component={ FavoriteRecipes } />
      <Route path="*" component={ PageNotFound } />

    </Switch>
  );
}

export default App;
