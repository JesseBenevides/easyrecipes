import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import CategoriesFilterButtons from '../components/CategoriesFilterButtons';
import RecipeCard from '../components/RecipeCard';
import RecipesContext from '../context/RecipesContext';
import useAPI from '../hooks/useAPI';
import { fetchDrinkByName, fetchDrinksCategories } from '../services/drinkAPI';

function Drinks() {
  const { recipes: {
    drinkList,
    drinkCategories,
    setDrinkList,
    setDrinkCategories,
  } } = useContext(RecipesContext);

  const INICIAL_DRINKLIST_LENGTH = 12;
  const INICIAL_DRINKCATEGORIES_LENGTH = 5;

  useAPI(fetchDrinkByName, setDrinkList, '', INICIAL_DRINKLIST_LENGTH);
  useAPI(fetchDrinksCategories, setDrinkCategories, '', INICIAL_DRINKCATEGORIES_LENGTH);

  const renderDrinkCard = () => (
    drinkList.map((recipe, index) => (
      <RecipeCard
        key={ recipe.idDrink }
        id={ recipe.idDrink }
        name={ recipe.strDrink }
        image={ recipe.strDrinkThumb }
        index={ index }
      />
    ))
  );

  const renderDrinkCategories = () => (
    <CategoriesFilterButtons categoryList={ drinkCategories } />
  );

  return (
    <section>
      <h2>Lista de Coquetéis</h2>
      <Container>
        <Row>
          {renderDrinkCategories()}
        </Row>
      </Container>
      <Container>
        <Row>
          { renderDrinkCard() }
        </Row>
      </Container>
    </section>
  );
}

export default Drinks;
