import { useState } from "react";

interface Props {
  initialPrice: number;
}

function Sample({ initialPrice }: Props) {
  const [drink, setDrink] = useState({
    name: "coffee",
    price: initialPrice,
    address: {
      city: "chennai",
      zip: 600125,
    },
  });

  //      this click handler is to increse the value of price
  //   const handleClick = () => {
  //     setDrink((prevDrink) => ({
  //       ...prevDrink,
  //       price: prevDrink.price + 1,
  //     }));
  //   };

  const handleClick = () => {
    setDrink((prevDrink) => ({
      ...prevDrink,
      address: { ...prevDrink.address, zip: prevDrink.address.zip + 1 },
    }));
  };

  return (
    <div>
      <p>Name: {drink.name}</p>
      <p>Price: {drink.price}</p>
      <p>Price: {drink.address.zip}</p>
      {/* <button className="btn btn-secondary" onClick={handleClick}>
        Increase Price
      </button> */}
      <button className="btn btn-secondary" onClick={handleClick}>
        Increase Price
      </button>
    </div>
  );
}

export default Sample;
