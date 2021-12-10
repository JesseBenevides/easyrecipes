import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Foods() {
  return (
    <div>
      <Header pageTitle="Comidas" hasSearch recipeType="food" />
      <Footer />
    </div>
  );
}

export default Foods;
