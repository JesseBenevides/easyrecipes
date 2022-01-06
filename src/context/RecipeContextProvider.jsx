import PropTypes from 'prop-types';
import React, { useState } from 'react';
import RecipesContext from './RecipesContext';

function RecipeContextProvider({ children }) {
  const [email, setEmail] = useState('');
  const [foodList, setFoodList] = useState([]);
  const [foodCategories, setFoodCategories] = useState([]);
  const [drinkList, setDrinkList] = useState([]);
  const [drinkCategories, setDrinkCategories] = useState([]);
  const [recommendedFoods, setRecommendedFoods] = useState([]);
  const [recommendedDrinks, setRecommendedDrinks] = useState([]);

  const contextValue = {
    user: {
      email,
      setEmail,
    },
    recipes: {
      foodList,
      setFoodList,
      foodCategories,
      setFoodCategories,
      drinkList,
      setDrinkList,
      drinkCategories,
      setDrinkCategories,
      recommendedFoods,
      setRecommendedFoods,
      recommendedDrinks,
      setRecommendedDrinks,
    },
  };

  return (
    <RecipesContext.Provider value={ contextValue }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipeContextProvider;
