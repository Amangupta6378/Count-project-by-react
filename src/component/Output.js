import React, { useEffect, useState } from "react";

const Output = () => {
  //   const [name, setCar] = useState("Bugati");
  //   const [color, setColor] = useState("Red");
  //   const [model, setModel] = useState("2024");
  const [car, setCar] = useState({
    name: "Bugati",
    color: "Blue",
    model: "2023",
  });

  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "green" };
    });
  };

  const [count, setCount] = useState(0);

  useEffect(()=>{
    setTimeout(()=>{
      setCount((count)=>count+1)
    },1000)
  })
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // });
  return (
    <div>
      <h2>The count is{count}</h2>
      <h1>Which car do you like the most?</h1>
      <h1>
        I love {car.color} {car.name} model {car.model}!
      </h1>
      <button onClick={updateColor}>Green</button>
      {/* <button onClick={() => setCar("Lamborgini")}>Lamborgini</button>
      <button onClick={() => setCar("Range Rover")}>Range Rover</button>
      <button onClick={() => setCar("Mercidies")}>Mercidies</button>
      <button onClick={() => setCar("BMW")}>BMW</button> */}
    </div>
  );
};

export default Output;
