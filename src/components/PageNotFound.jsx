import React from 'react';
import Image from 'react-bootstrap/Image';
import pageNotFoundImage from '../images/pageNotFound.svg';

function PageNotFound() {
  return (
    <div>
      <Image src={ pageNotFoundImage } />
    </div>
  );
}

export default PageNotFound;
