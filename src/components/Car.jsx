function RedCar({brand}) {
  return <option value={brand}>I am a {brand} car</option>;
}

export default function Car({ brand, wheels, message, colour }) {
  const cars = ["BMW", "Ford"];

  const alert_message = (m) => {
    alert(m);
  };

  if (colour == "true") {
    return (<RedCar />);
  }
  else {
    return (
        <>
        <p onClick={() => alert_message(message)}>My car is a {brand}</p>
        <p>My car has {wheels} wheels</p>
        <select>
             {cars.map((car) => <RedCar brand={car} />)}
        </select>
        
        </>
    );
    } // end if colour
}
