const ENDPOINT_MEAL_BY_NAME = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export default async function fetchMealByName(mealName) {
  const ENDPOINT = `${ENDPOINT_MEAL_BY_NAME}${mealName}`;

  const response = await fetch(ENDPOINT);
  const { meals } = await response.json();
  return meals;
}
