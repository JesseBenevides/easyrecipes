const ENDPOINT_MEAL_BY_NAME = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const ENDPOINT_LIST_CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const ENDPOINT_MEALS_BY_CATEGORY = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

export async function fetchMealByName(mealName) {
  const ENDPOINT = `${ENDPOINT_MEAL_BY_NAME}${mealName}`;

  const response = await fetch(ENDPOINT);
  const { meals } = await response.json();
  return meals;
}

export async function fetchMealsCategories() {
  const response = await fetch(ENDPOINT_LIST_CATEGORIES);
  const { meals } = await response.json();
  return meals;
}

export async function fetchMealsByCategories(categoryName) {
  const ENDPOINT = `${ENDPOINT_MEALS_BY_CATEGORY}${categoryName}`;
  const response = await fetch(ENDPOINT);
  const { meals } = await response.json();
  return meals;
}
