import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎", soldout: false },
    { name: "Mango", price: 7, emoji: "🥭", soldout: false },
    { name: "Banana", price: 2, emoji: "🍌", soldout: true },
    { name: "Orange", price: 5, emoji: "🍊", soldout: false },
    { name: "Pineapple", price: 8, emoji: "🍍", soldout: true },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit key={fruit.name} fruit={fruit} />
        ))}
      </ul>
    </div>
  );
}
