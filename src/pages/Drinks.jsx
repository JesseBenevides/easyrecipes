import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Drinks() {
  return (
    <div>
      <Header pageTitle="Bebidas" hasSearch recipeType="drinks" />
      <Footer />
    </div>
  );
}

export default Drinks;
