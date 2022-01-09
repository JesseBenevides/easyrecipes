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

export function getRecipeProgress(recipeId, recipeType) {
  const progressList = getProgressStorage();
  const updatedProgressList = { ...progressList };
  return updatedProgressList[recipeType][recipeId];
}

export function toggleRecipeInProgress(recipeId, recipeType) {
  const progressList = getProgressStorage();
  const updatedProgressList = { ...progressList };
  const recipeProgress = updatedProgressList[recipeType][recipeId];
  if (!recipeProgress) {
    updatedProgressList[recipeType][recipeId] = [];
    localStorage.setItem(PROGRESS_STORAGE, JSON.stringify(updatedProgressList));
  }
}

export function isRecipeInProgress(recipeId, recipeType) {
  const progressList = getProgressStorage();

  const progressListIDS = Object.keys(progressList[recipeType]);
  const isInProgress = progressListIDS.includes(recipeId);
  console.log(isInProgress);
  return isInProgress;
}

export function toggleIngredient(recipeId, ingredient, recipeType) {
  const progressList = getProgressStorage();
  const updatedProgressList = { ...progressList };

  if (updatedProgressList[recipeType][recipeId].includes(ingredient)) {
    updatedProgressList[recipeType][recipeId] = updatedProgressList[recipeType][recipeId].filter((i) => i !== ingredient);
  } else {
    updatedProgressList[recipeType][recipeId].push(ingredient);
  }

  localStorage.setItem(PROGRESS_STORAGE, JSON.stringify(updatedProgressList));
}

export function isIngredientChecked(recipeId, ingredient, recipeType) {
  const progressList = getProgressStorage();
  const updatedProgressList = { ...progressList };
  const isChecked = updatedProgressList[recipeType][recipeId].includes(ingredient);
  console.log(updatedProgressList[recipeType][recipeId], ingredient);
  return isChecked;
}