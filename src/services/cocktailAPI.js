const ENDPOINT_DRINKS_BY_NAME = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const ENDPOINT_LIST_CATEGORIES = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const ENDPOINT_DRINKS_BY_CATEGORY = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

export async function fetchDrinkByName(drinkName) {
  const ENDPOINT = `${ENDPOINT_DRINKS_BY_NAME}${drinkName}`;

  const response = await fetch(ENDPOINT);
  const { drinks } = await response.json();
  return drinks;
}

export async function fetchDrinksCategories() {
  const response = await fetch(ENDPOINT_LIST_CATEGORIES);
  const { drinks } = await response.json();
  return drinks;
}

export async function fetchDrinksByCategories(categoryName) {
  const ENDPOINT = `${ENDPOINT_DRINKS_BY_CATEGORY}${categoryName}`;
  const response = await fetch(ENDPOINT);
  const { drinks } = await response.json();
  return drinks;
}
