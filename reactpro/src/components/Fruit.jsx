export default function Fruit(props) {
  const { name, price } = props; 
  return (
    <>
      <li>{name} {price}</li>
    </>
  );
}
