import React, { useContext } from 'react';
import RecipeCard from '../components/RecipeCard';
import RecipesContext from '../context/RecipesContext';
import useAPI from '../hooks/useAPI';
import fetchDrinkByName from '../services/drinkAPI';

function Drinks() {
  const { recipes: { drinkList, setDrinkList } } = useContext(RecipesContext);

  useAPI(fetchDrinkByName, setDrinkList, '');

  const renderDrinkCard = () => (
    drinkList.map((recipe, index) => (
      <RecipeCard
        key={ `${index}` }
        name={ recipe.strDrink }
        image={ recipe.strDrinkThumb }
        index={ index }
      />
    ))
  );

  return (
    <section>
      <h2>Lista de Coquetéis</h2>
      { renderDrinkCard() }
    </section>
  );
}

export default Drinks;
