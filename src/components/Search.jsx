import React from 'react';
import { Form } from 'react-bootstrap';

function Search() {
  return (
    <Form>
      <Form.Group>
        <Form.Control data-testid="search-input" placeholder="Pesquisar receita..." />
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="radio"
          label="Ingrediente"
          name="ingredient"
          id="ingredient-radio"
        />
        <Form.Check
          type="radio"
          label="Nome"
          name="name"
          id="name-radio"
        />
        <Form.Check
          type="radio"
          label="Primeira letra"
          name="firstLetter"
          id="first-letter-radio"
        />
      </Form.Group>
    </Form>
  );
}

export default Search;
