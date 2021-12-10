const ENDPOINT_DRINK_BY_NAME = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const ENDPOINT_DRINK_BY_INGREDIENT = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
const ENDPOINT_DRINK_BY_FIRST_LETTER = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

export async function fetchDrinksByName(drinkLetter) {
  const ENDPOINT = `${ENDPOINT_DRINK_BY_NAME}${drinkLetter}`;

  const response = await fetch(ENDPOINT);
  const { drinks } = await response.json();
  return drinks;
}

export async function fetchDrinksByIngredient(ingredientName) {
  const ENDPOINT = `${ENDPOINT_DRINK_BY_INGREDIENT}${ingredientName}`;

  const response = await fetch(ENDPOINT);
  const { drinks } = await response.json();
  return drinks;
}

export async function fetchDrinksByFirstLetter(firstLetter) {
  const ENDPOINT = `${ENDPOINT_DRINK_BY_FIRST_LETTER}${firstLetter}`;

  const response = await fetch(ENDPOINT);
  const { drinks } = await response.json();
  return drinks;
}
