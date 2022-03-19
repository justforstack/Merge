import React, { useState } from "react";

function Main() {
  const [count, setCount] = useState(2);
  const handleClick = () => {
    setCount(count - 1);
  };
  if (count < 0) {
    throw new Error("The count became negative");
  }
  return (
    <>
      <h3>Main Component</h3>
      <button onClick={handleClick}>Counting</button>
      {count}
    </>
  );
}
export default Main;
