const ENDPOINT_MEAL_BY_NAME = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const ENDPOINT_LIST_CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const ENDPOINT_MEALS_BY_CATEGORY = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
const ENDPOINT_MEALS_BY_INGREDIENT = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const ENDPOINT_MEALS_BY_FIRST_LETTER = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
const ENDPOINT_MEAL_BY_ID = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const ENDPOINT_RECOMMENDED_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export async function fetchMealByName(mealName) {
  const ENDPOINT = `${ENDPOINT_MEAL_BY_NAME}${mealName}`;

  const response = await fetch(ENDPOINT);
  const { meals } = await response.json();
  return meals;
}

export async function fetchMealByID(mealID) {
  const ENDPOINT = `${ENDPOINT_MEAL_BY_ID}${mealID}`;

  const response = await fetch(ENDPOINT);
  console.log(ENDPOINT);
  const { meals } = await response.json();
  return meals;
}

export async function fetchMealsCategories() {
  const response = await fetch(ENDPOINT_LIST_CATEGORIES);
  const { meals } = await response.json();
  return meals;
}

export async function fetchMealsByIngredient(ingredientName) {
  const ENDPOINT = `${ENDPOINT_MEALS_BY_INGREDIENT}${ingredientName}`;

  const response = await fetch(ENDPOINT);
  const { meals } = await response.json();
  return meals;
}

export async function fetchMealsByCategories(categoryName) {
  const ENDPOINT = `${ENDPOINT_MEALS_BY_CATEGORY}${categoryName}`;
  const response = await fetch(ENDPOINT);
  const { meals } = await response.json();
  return meals;
}

export async function fetchMealsByFirstLetter(firstLetter) {
  const ENDPOINT = `${ENDPOINT_MEALS_BY_FIRST_LETTER}${firstLetter}`;
  const response = await fetch(ENDPOINT);
  const { meals } = await response.json();
  return meals;
}

export async function fetchRecommendedDrinks() {
  const response = await fetch(ENDPOINT_RECOMMENDED_DRINKS);
  const { drinks } = await response.json();
  return drinks;
}
