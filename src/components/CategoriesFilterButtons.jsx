/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Container, Row } from 'react-bootstrap';

function CategoriesFilterButtons({ categoryList }) {
  return (
    <Container>
      <Row>
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="secondary"
            data-testid="All-category-filter"
          >
            All
          </Button>
        </ButtonGroup>
        { categoryList.map((category, index) => (
          <ButtonGroup key={ index } aria-label="Basic example">
            <Button
              variant="secondary"
              data-testid={ `${category.strCategory}-category-filter` }
            >
              {category.strCategory}
            </Button>
          </ButtonGroup>
        ))}
      </Row>
    </Container>
  );
}

CategoriesFilterButtons.propTypes = {
  categoryList: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default CategoriesFilterButtons;
