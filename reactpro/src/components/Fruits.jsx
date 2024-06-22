import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 10 },
    { name: "Banana", price: 2 },
    { name: "Mango", price: 4 },
    { name: "Orange", price: 1.2 },
  ];

  return (
    <>
      <div>
        <ul>
          {fruits.map((fruit) => {
            return <Fruit key={fruit.name} name={fruit.name} price={fruit.price} />;
          })}
        </ul>
      </div>
    </>
  );
}
