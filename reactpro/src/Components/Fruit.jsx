export default function Fruit({ fruit }) {
  return (
    <>
      {
        <li>
          <h3>
            {fruit.emoji} {fruit.name} ${fruit.price}{" "}
            {fruit.soldout ? "soldout" : ""}
          </h3>
        </li>
      }
    </>
  );
}
