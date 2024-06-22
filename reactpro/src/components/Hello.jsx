function displayMsg() {
    return "Mint.Rosetta";
}

function Hello(props) {
  // destructuring object in props
  const { name, message, emoji, seatNumbers } = props.person;

  return (
    <>
      <h1>{message} {emoji} {name}</h1>
    </>
  );
}

export default Hello;

// 
