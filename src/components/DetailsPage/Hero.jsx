import PropTypes from 'prop-types';
import React from 'react';
import { Button, ButtonToolbar, Image } from 'react-bootstrap';

function Hero({ thumb, title, category, alcoholic = '' }) {
  return (
    <div>
      <div>
        <Image data-testid="recipe-photo" src={ thumb } alt={ title } thumbnail />
      </div>
      <div>
        <div>
          <h2 data-testid="recipe-title">{title}</h2>
          <h3 data-testid="recipe-category">{`${alcoholic} ${category}`}</h3>
        </div>
        <ButtonToolbar>
          <Button data-testid="share-btn" />
          <Button data-testid="favorite-btn" />
        </ButtonToolbar>
      </div>
    </div>
  );
}

Hero.propTypes = {
  alcoholic: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Hero;
