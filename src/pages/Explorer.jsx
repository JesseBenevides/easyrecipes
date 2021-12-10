import React from 'react';
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
      <Footer />
    </div>
  );
}

export default Explorer;
