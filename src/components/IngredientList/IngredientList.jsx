// src/components/IngredientList/IngredientList.jsx

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

export default IngredientList;
