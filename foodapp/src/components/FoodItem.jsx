export default function FoodItem({ food }) {
  return (
    <div>
      <img src={food.image} alt=""></img>
      <h1>{food.title}</h1>
      <button>View Recipe</button>
    </div>
  );
}
