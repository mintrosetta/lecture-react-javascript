import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 10, count: 0 },
    { name: "Banana", price: 2, count: 2 },
    { name: "Mango", price: 6, count: 0 },
    { name: "Orange", price: 1.2, count: 2 },
  ];

  return (
    // <></> is a fragment, not render like element
    <>
      <div>
        <ul>
          {fruits.map((fruit) => {
            return (
              <Fruit key={fruit.name} name={fruit.name} price={fruit.price} count={fruit.count} />
            );
          })}
        </ul>
      </div>
    </>
  );
}
