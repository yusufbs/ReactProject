export default function Fruit({ fruit }) {
  return (
    <>
      {/* {fruit.emoji} {fruit.name} ${fruit.price} */}
      {fruit.price > 5 ? (
        <li>
          <h3>
            {fruit.emoji} {fruit.name} ${fruit.price}
          </h3>
        </li>
      ) : (
        ""
      )}
    </>
  );
}
