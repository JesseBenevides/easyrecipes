import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import RecipeCard from '../components/RecipeCard';
import RecipesContext from '../context/RecipesContext';
import useAPI from '../hooks/useAPI';
import { fetchDrinkByName } from '../services/drinkAPI';

function Drinks() {
  const { recipes: { drinkList, setDrinkList } } = useContext(RecipesContext);
  const INICIAL_DRINKLIST_LENGTH = 12;

  useAPI(fetchDrinkByName, setDrinkList, '', INICIAL_DRINKLIST_LENGTH);

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
      <Container>
        <Row>
          { renderDrinkCard() }
        </Row>
      </Container>
    </section>
  );
}

export default Drinks;
