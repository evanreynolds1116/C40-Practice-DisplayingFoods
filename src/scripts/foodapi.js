fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
      parsedFoods.forEach (food => {
        const foodToHTML = createFoodComponent(food)
        addFoodToDom(foodToHTML)
      })
        console.table(parsedFoods)
    });

function createFoodComponent (food) {
  return `
    <div>
      <h1>${food.name}</h1>
      <p>Category: ${food.category}</p>
      <p>Ethnicity: ${food.ethnicity}</p>
    </div>
  `
};

function addFoodToDom (food) {
  document.querySelector(".foodList").innerHTML += food
}

