const ENDPOINT_MEAL_BY_NAME = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const ENDPOINT_MEALS_BY_INGREDIENT = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const ENDPOINT_MEALS_BY_FIRST_LETTER = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

export async function fetchMealByName(mealName) {
  const ENDPOINT = `${ENDPOINT_MEAL_BY_NAME}${mealName}`;

  const response = await fetch(ENDPOINT);
  const { meals } = await response.json();
  return meals;
}

export async function fetchMealsByIngredient(ingredientName) {
  const ENDPOINT = `${ENDPOINT_MEALS_BY_INGREDIENT}${ingredientName}`;

  const response = await fetch(ENDPOINT);
  const { meals } = await response.json();
  return meals;
}

export async function fetchMealsByFirstLetter(firstLetter) {
  const ENDPOINT = `${ENDPOINT_MEALS_BY_FIRST_LETTER}${firstLetter}`;
  console.log(ENDPOINT);
  const response = await fetch(ENDPOINT);
  const { meals } = await response.json();
  return meals;
}
