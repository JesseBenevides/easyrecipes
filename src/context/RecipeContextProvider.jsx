import PropTypes from 'prop-types';
import React, { useState } from 'react';
import RecipesContext from './RecipesContext';

function RecipeContextProvider({ children }) {
  const [email, setEmail] = useState('');

  const contextValue = {
    user: {
      email,
      setEmail,
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
