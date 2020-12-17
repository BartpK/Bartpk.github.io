////Data tests
console.log(
    shoppingItems.map(item => {
        return item.item
    }).sort()
)



let recipesArray = [];
let ingredientsArray = [];

const textInput = document.querySelector("#textinput");
const autoSuggestPopup = document.querySelector("#autosuggestpopup")


textInput.addEventListener('input', (e) => {
    autoSuggestPopup.innerHTML = ""
    const suggestionArray = shoppingItems.filter(item => {
        return (item.item.toLowerCase().includes(e.target.value.toLowerCase()));
    })
    if (e.target.value.length > 0) {
        displaySuggestions(suggestionArray, e.target.value);
    } else {
        autoSuggestPopup.className = "hiddenpopup"
    }
})

const displaySuggestions = (suggestions, searchString) => {
    suggestions = suggestions.slice(0, 10)

    if (suggestions.length > 0) {
        autoSuggestPopup.className = "openpopup"
    } else {
        autoSuggestPopup.className = "hiddenpopup"
    }
    //searchString.replace(searchString[0], searchString[0].toUpperCase)

    //Changed search string to start with uppercase letter
    searchString = searchString[0].toUpperCase().concat(searchString.substring(1))

    suggestions.forEach(suggestion => {
        let newElement = document.createElement('div');
        newElement.innerHTML = formatSuggestion(searchString, suggestion) +
            `<p class="suggestionaisle">${suggestion.aisle} aisle</p>`
        // (
        //     `<p class="suggestionitem">${suggestion.item.replace(searchString, `<strong>${searchString}</strong>`)
        //         .replace(searchString.toLowerCase(), `<strong>${searchString.toLowerCase()}</strong>`)
        //     } </p>
        //         <p class="suggestionaisle">${suggestion.aisle} aisle</p>`
        // )

        // newElement.innerHTML = `${suggestion.item} in aisle ${suggestion.aisle}`
        // newElement.className = "suggestion"
        autoSuggestPopup.appendChild(newElement);
        newElement.addEventListener('click', () => popSuggested(suggestion.item, suggestion.aisle))
    })
}

const formatSuggestion = (searchString, suggestion) => {
    if (suggestion.item.includes(searchString)) {
        return (
            `<p class="suggestionitem">${suggestion.item.replace(searchString, `<strong>${searchString}</strong>`)} </p>`
        )
    } else if (suggestion.item.includes(searchString.toLowerCase())) {
        return (
            `<p class="suggestionitem">${suggestion.item.replace(searchString.toLowerCase(), `<strong>${searchString.toLowerCase()}</strong>`)} </p>`
        )
    }
}

const popSuggested = (item, aisle) => {
    textInput.value = item;
    aisleSelect.value = aisle;
    autoSuggestPopup.className = "hiddenpopup"
}

const qtyInput = document.querySelector("#qtyinput");
const aisleSelect = document.querySelector("#aisleselect");
const addButton = document.querySelector("#addbutton");
const aisleHeaders = document.querySelectorAll(".aisleheader");
const aislesArray = Array.from(aisleHeaders);
const recipePopup = document.querySelector("#recipepopup");

const addRecipePopup = document.querySelector("#addrecipepopup");

const cancelAddRecipeButton = document.querySelector("#canceladdrecipe")


const addRecipeButton = document.querySelector("#addrecipebutton");

const newRecipeName = document.querySelector("#newrecipename")

const ingredientsContainer = document.querySelector("#ingredientscontainer");

const recipeSelect = document.querySelector("#recipeselect");
recipeSelect.addEventListener("change", () => {
    openPopUp(recipeSelect.value);
})
const clearButtonWrapper = document.querySelector(".clearbuttonwrapper");

const today = new Date();
const daysToThursday = 11 - (today.getDay());
const nextThursday = today.setDate(today.getDate() + daysToThursday)
const nextThursdayReadable = new Date(nextThursday);
const nextThursdayDisplay = ("Thursday is " + nextThursdayReadable.getDate() + "/" + (nextThursdayReadable.getMonth() + 1))

document.querySelector(".thursday").innerHTML = nextThursdayDisplay;

qtyInput.value = "1";

const getData = async () => {
    const request = await fetch("https://shopping-list-bd71b.firebaseio.com/ShoppingList.json", { method: "GET" });
    const data = await request.json();
    if (data === null) {
        showList([]);
    } else {
        let shoppingList = Object.keys(data).map(key => ({
            id: key,
            item: data[key].item,
            aisle: data[key].aisle,
            qty: data[key].qty,
            bought: data[key].bought
        }));

        showList(shoppingList);
    }
}


const cleanRecipes = (inputData) => {

    let cleanData = Object.keys(inputData).map(key => ({
        id: key,
        ingredients: inputData[key].ingredients,
        recipe: inputData[key].recipe,

    }));

    return cleanData;
}

const cleanIngredients = (inputData) => {
    let cleanData = Object.keys(inputData).map(key => ({
        id: key,
        aisle: inputData[key].aisle,
        ingredient: inputData[key].ingredient
    }));

    return cleanData;
}

getData();

const showList = (shoppingList) => {

    aislesArray.forEach(aisle => {
        aisle.innerHTML = ""
    })

    shoppingList.forEach(inputItem => {


        const listItem = document.createElement("div");
        const item = document.createElement("input");
        const itemName = document.createElement("label");
        const qty = document.createElement("p");
        const removeButton = document.createElement("img");
        const plusbutton = document.createElement("div")
        plusbutton.className = "plusbutton";
        plusbutton.innerHTML = '<p class="plusminus">+</p>';
        plusbutton.addEventListener("click", () => { plusminus(inputItem, 1) })

        const minusbutton = document.createElement("div")
        minusbutton.className = "minusbutton";
        minusbutton.innerHTML = '<p class="plusminus">-</p>'
        minusbutton.addEventListener("click", () => { plusminus(inputItem, -1) });

        listItem.className = "listitem";
        item.type = "checkbox";
        item.name = inputItem.item;
        item.className = "checkbox";
        itemName.for = inputItem.item;
        itemName.innerHTML = inputItem.item;

        removeButton.src = "delete.svg";
        removeButton.className = "removebutton"

        qty.innerHTML = inputItem.qty;
        qty.className = "qty";

        listItem.appendChild(item);
        listItem.appendChild(itemName);
        listItem.appendChild(plusbutton);
        listItem.appendChild(qty);
        listItem.appendChild(minusbutton);
        listItem.appendChild(removeButton);

        removeButton.addEventListener("click", () => { deleteItem(inputItem.id) });
        item.addEventListener("click", () => { updateStatus(inputItem.id, inputItem.item, inputItem.bought, inputItem.aisle, inputItem.qty) })
        itemName.addEventListener("click", () => { updateStatus(inputItem.id, inputItem.item, inputItem.bought, inputItem.aisle, inputItem.qty) })

        const aisle = document.querySelector(`#${inputItem.aisle} `)

        if (inputItem.bought === true) {
            item.checked = "true";
            itemName.className = "bought";
        }

        aisle.appendChild(listItem);

    });
    clearButtonWrapper.innerHTML = "";
    const clearListButton = document.createElement("button");

    clearListButton.innerHTML = "Clear shopping list"
    clearButtonWrapper.appendChild(clearListButton);
    clearListButton.className = "clearlist";
    clearListButton.addEventListener("click", () => {
        clearList(shoppingList);
    })


}

const clearList = (shoppingList) => {
    if (confirm("This clears the entire shopping list and cannot be undone. Are you sure?")) {

        shoppingList.forEach(async (item) => {
            await fetch(`https://shopping-list-bd71b.firebaseio.com/ShoppingList/${item.id}.json`, { method: "DELETE" });
            getData();
        })
    }

}


const updateStatus = async (id, item, bought, aisle, qty) => {
    if (bought === false) {
        await fetch(`https://shopping-list-bd71b.firebaseio.com/ShoppingList/${id}.json`, { method: "PUT", body: `{ "item": "${item}", "aisle": "${aisle}", "qty":${qty}, "bought": true }` });
    } else {
        await fetch(`https://shopping-list-bd71b.firebaseio.com/ShoppingList/${id}.json`, { method: "PUT", body: `{ "item": "${item}", "aisle": "${aisle}", "qty":${qty}, "bought": false }` });
    }
    getData();
}

const plusminus = async (inputItem, mod) => {
    if (inputItem.qty === 1 && mod === -1) {
        deleteItem(inputItem.id)
    } else {
        await fetch(`https://shopping-list-bd71b.firebaseio.com/ShoppingList/${inputItem.id}.json`, { method: "PUT", body: `{ "item": "${inputItem.item}", "aisle": "${inputItem.aisle}", "qty":${inputItem.qty + mod}, "bought": ${inputItem.bought} }` });
        getData();
    }
}

// const addItem = async (item, aisle, qty) => {

//     console.log({ method: "POST", body: `{ "item": ${item}, "aisle": ${aisle}, "qty":${qty}, "bought": false }` })
//     try {
//         await fetch("https://shopping-list-bd71b.firebaseio.com/ShoppingList.json", { method: "POST", body: `{ "item": "${textInput.value}", "aisle": "${aisleSelect.value}", "qty":${qtyInput.value}, "bought": false }` });
//     }
//     catch {
//         alert("Could add item to database");
//     }
//     textInput.value = "";
//     qtyInput.value = "1";
//     getData();
// }

const addItem = async (item, aisle, qty) => {


    try {
        await fetch("https://shopping-list-bd71b.firebaseio.com/ShoppingList.json", { method: "POST", body: `{ "item": "${item}", "aisle": "${aisle}", "qty":${qty}, "bought": false }` });
    }
    catch {
        alert("Could add item to database");
    }
    textInput.value = "";
    qtyInput.value = "1";
    autoSuggestPopup.className = "hiddenpopup"
    getData();
}

const deleteItem = async (id) => {
    await fetch(`https://shopping-list-bd71b.firebaseio.com/ShoppingList/${id}.json`, { method: "DELETE" });
    getData();
}

const buildRecipeList = () => {
    recipesArray.forEach(recipe => {
        const recipeOption = document.createElement("option");
        recipeOption.value = recipe.recipe;
        recipeOption.innerHTML = recipe.recipe;
        recipeSelect.appendChild(recipeOption);
    })
}

const openPopUp = (selectedRecipe) => {

    recipePopup.className = "openpopup";
    const recipeHeader = document.querySelector("#recipeheader");
    recipeHeader.innerHTML = selectedRecipe;
    const selectedRecipeIngredients = recipesArray.filter(recipe => {
        return recipe.recipe == selectedRecipe;
    }).map(recipe => {
        return recipe.ingredients;
    })[0].split(',')
    //console.log(selectedRecipeIngredients[0].split(','));

    ingredientsContainer.innerHTML = "";
    selectedRecipeIngredients.forEach(ingredient => {
        if (ingredient.length > 1) {
            const ingredientWrapper = document.createElement('div');
            ingredientWrapper.className = "ingredientwrapper";
            ingredientWrapper.id = ingredient;
            const ingredientName = document.createElement("p");
            ingredientName.innerHTML = ingredient;
            const ingredientDeleteButton = document.createElement("img");
            ingredientDeleteButton.src = "delete.svg";
            ingredientDeleteButton.className = "removebutton";
            ingredientWrapper.appendChild(ingredientName);

            ingredientWrapper.appendChild(ingredientDeleteButton);
            //delete button removes ingredient from array and removes ingredientwrapper from the DOM
            ingredientDeleteButton.addEventListener("click", () => {

                ingredientsContainer.removeChild(ingredientWrapper);
                removeStringFromArray(selectedRecipeIngredients, ingredient);

            })

            ingredientsContainer.appendChild(ingredientWrapper);
        }
    })
    const addIngredientsButton = document.createElement("button");
    addIngredientsButton.id = "addingredientsbutton";
    addIngredientsButton.innerHTML = "Add to list";
    addIngredientsButton.addEventListener("click", () => {
        selectedRecipeIngredients.forEach(ingredient => {
            addItem(ingredient, matchIngredientToAisle(ingredient), 1)
        })

        recipePopup.className = "hiddenpopup";

    })
    const cancelButton = document.createElement("button");
    cancelButton.id = "cancelbutton";
    cancelButton.innerHTML = "Cancel";
    cancelButton.addEventListener("click", () => {
        recipePopup.className = "hiddenpopup";
    })


    ingredientsContainer.appendChild(addIngredientsButton);
    ingredientsContainer.appendChild(cancelButton);
}

addButton.addEventListener("click", () => {
    addItem(textInput.value, aisleSelect.value, qtyInput.value);
})

//Function to remove items from array. 
const removeStringFromArray = (array, stringToRemove) => {

    for (i = 0; i < array.length; i++) {
        if (array[i] == stringToRemove) {
            array.splice(i, 1);
        }
    }

}

//inputs an ingredient and outputs an aisle
const matchIngredientToAisle = (ingredientToLookup) => {
    const foundIngredient = ingredientsArray.filter(ingredient => {
        return ingredient.ingredient === ingredientToLookup;
    })
    if (foundIngredient.length < 1) {
        return "Other";
    } else {
        return foundIngredient[0].aisle;
    }
}


//Function to add recipe. Should create object with recipe name and comma list of ingredient + another object for each ingredient + aisle


const addRecipeToDatabase = () => {
    let newIngredientsList = "";
    for (i = 0; i < 7; i++) {
        const ingredientToAdd = document.querySelector(`#ingredient${i}`).value;
        if (ingredientToAdd != "" && ingredientToAdd != " ") {
            newIngredientsList += ingredientToAdd + ",";
        }
    }
    ///Create function to add recipe to database
    const newRecipeObject = `{
        "ingredients": "${newIngredientsList}",
        "recipe": "${newRecipeName.value}"
    }`

    if (newRecipeName.value != "" && newRecipeName.value != " ") {

        postRecipeToDatabase(newRecipeObject);
    }
}
const addIngredientsToDatabase = () => {

    for (i = 0; i < 7; i++) {
        const ingredientToAdd = document.querySelector(`#ingredient${i}`).value;
        const aisleToAdd = document.querySelector(`#ingredientaisle${i}`).value;
        if (ingredientToAdd != "" && ingredientToAdd != " ") {

            const newIngredientObject = `{
                "aisle": "${aisleToAdd}",
                "ingredient": "${ingredientToAdd}"
            }`


            postIngredientsToDatabase(newIngredientObject);
        }
    }
}

const postIngredientsToDatabase = async (newIngredientObject) => {

    try {
        await fetch("https://shopping-list-bd71b.firebaseio.com/Ingredients.json", { method: "POST", body: `${newIngredientObject}` });
    }
    catch {
        alert("Could no add ingredient to database");
    }

}

const postRecipeToDatabase = async (newRecipeObject) => {
    try {
        await fetch("https://shopping-list-bd71b.firebaseio.com/Recipes.json", { method: "POST", body: `${newRecipeObject}` });
    }
    catch {
        alert("Could not add ingredient to database");
    }
}

addRecipeButton.addEventListener("click", () => {
    addRecipeToDatabase();
    addIngredientsToDatabase();
    addRecipePopup.className = "hiddenpopup"
})

const addNewRecipeButton = document.querySelector("#addnewrecipebutton");
addNewRecipeButton.addEventListener("click", () => {
    addRecipePopup.className = "openpopup";
})

cancelAddRecipeButton.addEventListener("click", () => {
    addRecipePopup.className = "hiddenpopup";
})