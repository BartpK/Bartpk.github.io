const shoppingItems = [
    {
        item: "Pizza dough",
        aisle: "Vegetables"
    },
    {
        item: "Paprikas",
        aisle: "Vegetables"
    },
    {
        item: "Lettuce",
        aisle: "Vegetables"
    },
    {
        item: "Spring onions",
        aisle: "Vegetables"
    },
    {
        item: "Garlic",
        aisle: "Vegetables"
    },
    {
        item: "Beyond burgers",
        aisle: "Meats"
    },
    {
        item: "Salami",
        aisle: "Meats"
    },
    {
        item: "Minced meat",
        aisle: "Meats"
    },
    {
        item: "Salmon",
        aisle: "Meats"
    },
    {
        item: "Burger cheese",
        aisle: "Cheese"
    },
    {
        item: "Mozarella (for pizza)",
        aisle: "Cheese"
    },
    {
        item: "Grated cheese",
        aisle: "Cheese"
    },
    {
        item: "Parmezan block",
        aisle: "Cheese"
    },
    {
        item: "Burger buns",
        aisle: "Bread"
    },
    {
        item: "Milk",
        aisle: "Dairy"
    },
    {
        item: "Chicken",
        aisle: "Meats"
    },
    {
        item: "Creme fraiche",
        aisle: "Dairy"
    },
    {
        item: "Cooking cream",
        aisle: "Dairy"
    },
    {
        item: "Cherry tomatoes",
        aisle: "Vegetables"
    },
    {
        item: "Cucumber",
        aisle: "Vegetables"
    },
    {
        item: "Red berries",
        aisle: "Vegetables"
    },
    {
        item: "Bananas",
        aisle: "Vegetables"
    },
    {
        item: "Lemons",
        aisle: "Vegetables"
    },
    {
        item: "Breakfast bread",
        aisle: "Bread"
    },
    {
        item: "Peanut butter",
        aisle: "Bread"
    },
    {
        item: "Eggs",
        aisle: "Bread"
    },
    {
        item: "Muesli",
        aisle: "Bread"
    },
    {
        item: "Jam",
        aisle: "Bread"
    },
    {
        item: "Normal bread",
        aisle: "Bread"
    },
    {
        item: "Nutella",
        aisle: "Bread"
    },
    {
        item: "Crackers",
        aisle: "Bread"
    },
    {
        item: "Flour",
        aisle: "Tea"
    },
    {
        item: "Coffee",
        aisle: "Tea"
    },
    {
        item: "Fresh basil",
        aisle: "Vegetables"
    },
    {
        item: "Salt",
        aisle: "Pasta"
    },
    {
        item: "Pepper",
        aisle: "Pasta"
    },
    {
        item: "Tortillas (wraps)",
        aisle: "Pasta"
    },
    {
        item: "Tortillas (wraps), small",
        aisle: "Pasta"
    },
    {
        item: "Spaghetti",
        aisle: "Pasta"
    },
    {
        item: "Macaroni",
        aisle: "Pasta"
    },
    {
        item: "Pesto",
        aisle: "Pasta"
    },
    {
        item: "Pasta sauce",
        aisle: "Pasta"
    },
    {
        item: "Jalapeños",
        aisle: "Pasta"
    },
    {
        item: "Taco spices",
        aisle: "Pasta"
    },
    {
        item: "Crispy chicken mix",
        aisle: "Pasta"
    },
    {
        item: "Rice",
        aisle: "Pasta"
    },
    {
        item: "Risotto rice",
        aisle: "Pasta"
    },
    {
        item: "Penne",
        aisle: "Pasta"
    },
    {
        item: "Pine nuts",
        aisle: "Vegetables"
    },
    {
        item: "Broccoli",
        aisle: "Vegetables"
    },
    {
        item: "Cauliflower",
        aisle: "Vegetables"
    },
    {
        item: "Gnocchi",
        aisle: "Vegetables"
    },
    {
        item: "Green beans",
        aisle: "Vegetables"
    },
    {
        item: "Pasta veggies",
        aisle: "Vegetables"
    },
    {
        item: "Wok veggies",
        aisle: "Vegetables"
    },
    {
        item: "Chicken filet",
        aisle: "Meats"
    },
    {
        item: "Varkenshaas",
        aisle: "Meats"
    },
    {
        item: "Tofu",
        aisle: "Meats"
    },
    {
        item: "Crispy chicken",
        aisle: "Meats"
    },
    {
        item: "Stew meat (beef)",
        aisle: "Meats"
    },
    {
        item: "Steaks",
        aisle: "Meats"
    },
    {
        item: "Corn (on the cob)",
        aisle: "Vegetables"
    },
    {
        item: "Corn (can)",
        aisle: "Sauces"
    },
    {
        item: "Soup",
        aisle: "Sauces"
    },
    {
        item: "Olive oil",
        aisle: "Pasta"
    },
    {
        item: "Mayonnaise",
        aisle: "Sauces"
    },
    {
        item: "Ketchup",
        aisle: "Sauces"
    },
    {
        item: "Garlic sauce",
        aisle: "Sauces"
    },
    {
        item: "BBQ sauce",
        aisle: "Sauces"
    },
    {
        item: "Tuna",
        aisle: "Sauces"
    },
    {
        item: "Pineapple",
        aisle: "Sauces"
    },
    {
        item: "Noodles (lunch)",
        aisle: "Sauces"
    },
    {
        item: "Juice",
        aisle: "Snacks"
    },
    {
        item: "Beer",
        aisle: "Snacks"
    },
    {
        item: "Red wine",
        aisle: "Snacks"
    },
    {
        item: "White wine",
        aisle: "Snacks"
    },
    {
        item: "Pickles",
        aisle: "Sauces"
    },
    {
        item: "Tomatoblokjes",
        aisle: "Pasta"
    },
    {
        item: "Tomato puree",
        aisle: "Pasta"
    },
    {
        item: "Naan bread",
        aisle: "Pasta"
    },
    {
        item: "Wok sauce",
        aisle: "Pasta"
    },
    {
        item: "Soy sauce",
        aisle: "Pasta"
    },
    {
        item: "Noodles (dinner)",
        aisle: "Pasta"
    },
    {
        item: "Tea",
        aisle: "Tea"
    },
    {
        item: "Focaccias",
        aisle: "Vegetables"
    },
    {
        item: "Oven fries",
        aisle: "Snacks"
    },
    {
        item: "Rosti rondjes",
        aisle: "Snacks"
    },
    {
        item: "Mexican frozen veggies",
        aisle: "Snacks"
    },
    {
        item: "Plastic garbage bags",
        aisle: "Household"
    },
    {
        item: "Biowaste bags",
        aisle: "Household"
    },
    {
        item: "Laundry detergent",
        aisle: "Household"
    },
    {
        item: "Laundry softener",
        aisle: "Household"
    },
    {
        item: "Handsoap",
        aisle: "Household"
    },
    {
        item: "Toothpaste",
        aisle: "Household"
    },
    {
        item: "Toothpicks",
        aisle: "Household"
    },
    {
        item: "Mouthwash",
        aisle: "Household"
    },
    {
        item: "Deodorant",
        aisle: "Household"
    },
    {
        item: "Dishwashing soap",
        aisle: "Household"
    },
    {
        item: "Kitchen paper",
        aisle: "Household"
    },
    {
        item: "Toilet paper",
        aisle: "Household"
    },
    {
        item: "Baking paper",
        aisle: "Household"
    },
    {
        item: "Aluminium foil",
        aisle: "Household"
    },
    {
        item: "Dishwasher shiny liquid",
        aisle: "Household"
    },
    {
        item: "Flowers",
        aisle: "Household"
    },
    {
        item: "Syrup",
        aisle: "Tea"
    },
    {
        item: "Pancake mix",
        aisle: "Tea"
    },
    {
        item: "Hummus",
        aisle: "Cheese"
    },
    {
        item: "Mozarella",
        aisle: "Cheese"
    },
    {
        item: "Pasta cheese",
        aisle: "Cheese"
    },
    {
        item: "Normal cheese",
        aisle: "Cheese"
    },
    {
        item: "Tzatziki",
        aisle: "Cheese"
    },
    {
        item: "Empanadas",
        aisle: "Bread"
    },
    {
        item: "Yoghurt",
        aisle: "Dairy"
    },
    {
        item: "Red pepper",
        aisle: "Vegetables"
    },
    {
        item: "Fresh Koriander",
        aisle: "Vegetables"
    },
    {
        item: "Fresh spinach",
        aisle: "Vegetables"
    },
    {
        item: "Frozen spinach",
        aisle: "Snacks"
    }
]












