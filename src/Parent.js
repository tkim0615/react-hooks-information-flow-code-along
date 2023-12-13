import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState('#FFF');

//   function handleChildrenColorChange(){
//     setChildrenColor(getRandomColor())
// }

  function handleChangeColor() {
    setColor(getRandomColor());
    setChildrenColor(getRandomColor());
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleChangeColor} color={childrenColor} />
      <Child onChangeColor={handleChangeColor} color={childrenColor}/>
    </div>
  );
}

export default Parent;
