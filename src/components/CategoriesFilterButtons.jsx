import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

function CategoriesFilterButtons({ categoryList }) {
  return (
    categoryList.map((category, index) => (
      <ButtonGroup key={ index } aria-label="Basic example">
        <Button
          variant="secondary"
          data-testid={ `${category.strCategory}-category-filter` }
        >
          {category.strCategory}
        </Button>
      </ButtonGroup>
    ))
  );
}

export default CategoriesFilterButtons;
