const PROGRESS_STORAGE = 'inProgressRecipes';

// function mapSimpleIngredientList(recipe) {
//   if (recipe) {
//     const MIN_LENGHT = 1;
//     const MAX_LENGHT = 20;
//     const updatedIngredientList = [];

//     for (let i = MIN_LENGHT; i <= MAX_LENGHT; i += 1) {
//       const ingredient = recipe[`strIngredient${i}`];

//       if (ingredient) {
//         updatedIngredientList.push(ingredient);
//       }
//     }
//     return updatedIngredientList;
//   }
// }

export function createInProgressList() {
  const list = localStorage.getItem(PROGRESS_STORAGE);
  if (!list) {
    localStorage.setItem(PROGRESS_STORAGE, JSON.stringify({
      cocktails: {},
      meals: {},
    }));
  }
}

export function getProgressStorage() {
  createInProgressList();
  return JSON.parse(localStorage.getItem(PROGRESS_STORAGE));
}

export function toggleRecipeInProgress([recipe], recipeType) {
  const progressList = getProgressStorage();
  const updatedProgressList = { ...progressList };
  const recipeId = recipeType === 'meals' ? recipe.idMeal : recipe.idDrink;
  // const ingredients = mapSimpleIngredientList(recipe);
  console.log(recipeId, recipeType, recipe);
  updatedProgressList[recipeType][recipeId] = [];
  localStorage.setItem(PROGRESS_STORAGE, JSON.stringify(updatedProgressList));
}

export function isRecipeInProgress(recipeId, recipeType) {
  const progressList = getProgressStorage();
  console.log(getProgressStorage());

  const progressListIDS = Object.keys(progressList[recipeType]);
  const isInProgress = progressListIDS.includes(recipeId);
  return isInProgress;
}
