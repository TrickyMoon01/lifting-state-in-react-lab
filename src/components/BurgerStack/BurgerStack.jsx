// src/components/BurgerStack/BurgerStack.jsx

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

export default BurgerStack;
