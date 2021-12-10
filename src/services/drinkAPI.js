const ENDPOINT_DRINKS_BY_NAME = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export default async function fetchDrinkByName(drinkName) {
  const ENDPOINT = `${ENDPOINT_DRINKS_BY_NAME}${drinkName}`;

  const response = await fetch(ENDPOINT);
  const { drinks } = await response.json();
  return drinks;
}
