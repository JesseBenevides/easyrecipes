import PropTypes from 'prop-types';
import React from 'react';

function Instructions({ instructions }) {
  return (
    <div>
      <h3>Instruções</h3>
      <p data-testid="instructions">{ instructions }</p>
    </div>
  );
}

Instructions.propTypes = {
  instructions: PropTypes.string.isRequired,
};

export default Instructions;
