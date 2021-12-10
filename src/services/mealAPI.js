const ENDPOINT_MEAL_BY_NAME = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const ENDPOINT_MEALS_CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

export async function fetchMealByName(mealName) {
  const ENDPOINT = `${ENDPOINT_MEAL_BY_NAME}${mealName}`;

  const response = await fetch(ENDPOINT);
  const { meals } = await response.json();
  return meals;
}

export async function fetchMealsCategories() {
  const response = await fetch(ENDPOINT_MEALS_CATEGORIES);
  const { meals } = await response.json();
  return meals;
}
