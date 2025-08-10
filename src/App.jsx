import "./App.css";
import "./components/BurgerStack/BurgerStack";
import "./components/IngredientList/IngredientList";
import { useState } from "react";

const IngredientList = ({ ingredients, onAddIngredient }) => {
  return (
    <div>
      <div>
        {ingredients.map((ingredient, index) => (
          <div key={index} style={{ backgroundColor: ingredient.color }}>
            <span>{ingredient.name}</span>
            <button onClick={() => onAddIngredient(ingredient)}>+</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const BurgerStack = ({ stack, onRemoveIngredient }) => {
  return (
    <div>
      <div>
        {stack.length === 0 ? (
          <div>
            <p>No ingredients yet!</p>
            <p>Click the + button to add ingredients to your burger</p>
          </div>
        ) : (
          <div>
            {stack.map((ingredient, index) => (
              <div style={{ backgroundColor: ingredient.color }}>
                <span>{ingredient.name}</span>
                <button onClick={() => onRemoveIngredient(index)}>X</button>
              </div>
            ))}
          </div>
        )}
      </div>
      {stack.length > 0 && <div></div>}
    </div>
  );
};

const App = () => {
  const availableIngredients = [
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
    { name: "Cheddar Cheese", color: "#FDE18B" },
    { name: "Swiss Cheese", color: "#F1E1A8" },
  ];

  const [stack, setStack] = useState([]);

  const addToBurger = (ingredient) => {
    setStack((prevStack) => [...prevStack, ingredient]);
  };

  const removeFromBurger = (index) => {
    setStack((prevStack) => prevStack.filter((_, i) => i !== index));
  };

  return (
    <main>
      <div>
        <h1>Burger Stacker</h1>
        <section>
          <IngredientList
            ingredients={availableIngredients}
            onAddIngredient={addToBurger}
          />
          <BurgerStack stack={stack} onRemoveIngredient={removeFromBurger} />
        </section>
      </div>
    </main>
  );
};

export default App;
