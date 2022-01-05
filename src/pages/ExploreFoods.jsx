import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import { fetchMealRandom } from '../services/mealAPI';

function ExploreMeals() {
  const [random] = useState([]);
  // const returnFunction = '';
  console.log(random);
  return (
    <div>
      <Header pageTitle="Explorar" />
      <Link to="/explorar/comidas/ingredientes" data-testid="explore-by-ingredient">
        Por Ingredientes
      </Link>

      <Link
        to="/explorar/comidas/area"
        data-testid="explore-by-area"
      >
        Por Local de Origem
      </Link>

      <Link
        to="/explorar/comidas"
        data-testid="explore-surprise"
        // onCLick={ () => setState(fetchMealRandom()) }
      >

        Me Surpreenda!
      </Link>
      {console.log}
      <Footer />
    </div>
  );
}

export default ExploreMeals;
