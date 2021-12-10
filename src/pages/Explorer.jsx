import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Explorer() {
  return (
    <div>
       <button 
          data-testid="explore-food"
          // disabled={ disable }
          onClick={ this.inputSubmite }
        >
          Explorar Comidas
        </button>
      <Header pageTitle="Explorar" />
      <Footer />
    </div>
  );
}

export default Explorer;
