import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import {
  Button,
  ButtonToolbar,
  Image,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import copy from 'clipboard-copy';
import shareBtnImg from '../../images/shareIcon.svg';

const SHARE_TIMEOUT_MS = 5000;

function Hero({ thumb, title, category, alcoholic = '' }) {
  const [showCopyMsg, setShowCopyMsg] = useState(false);

  function handleShare() {
    setShowCopyMsg(true);
    setTimeout(() => {
      setShowCopyMsg(false);
    }, SHARE_TIMEOUT_MS);
  }

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
          <Button
            data-testid="share-btn"
            onClick={ () => {
              handleShare();
              copy(window.location.href);
            } }
          >
            {
              // Ideia de substuir o texto do botão ao compartilhar:
              // https://github.com/tryber/sd-015-b-project-recipes-app/pull/264
            }
            {showCopyMsg ? 'Link copiado!' : <Image src={ shareBtnImg } />}
          </Button>
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
