const ENDPOINT_DRINKS_BY_NAME = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const ENDPOINT_DRINKS_CATEGORIES = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

export async function fetchDrinkByName(drinkName) {
  const ENDPOINT = `${ENDPOINT_DRINKS_BY_NAME}${drinkName}`;

  const response = await fetch(ENDPOINT);
  const { drinks } = await response.json();
  return drinks;
}

export async function fetchDrinksCategories() {
  const response = await fetch(ENDPOINT_DRINKS_CATEGORIES);
  const { drinks } = await response.json();
  return drinks;
}
