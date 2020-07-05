const getSheetsData = async () => {

    const recipeRequest = await fetch('https://shopping-list-bd71b.firebaseio.com/Recipes.json');
    const recipeData = await recipeRequest.json();
    const cleanRecipeData = cleanRecipes(recipeData);

    const ingredientsRequest = await fetch('https://shopping-list-bd71b.firebaseio.com/Ingredients.json');
    const ingredientsData = await ingredientsRequest.json();
    const cleanIngredientsData = cleanIngredients(ingredientsData);

    createLocalData(cleanRecipeData, cleanIngredientsData);
}

const createLocalData = (recipeData, ingredientsData) => {
    recipesArray = recipeData;
    ingredientsArray = ingredientsData;
    buildRecipeList();
}

getSheetsData();