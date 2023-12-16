import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, childColor }) {


  return <div onClick={onChangeColor} className="child" style={{ backgroundColor: childColor }} />;
}

export default Child;
//child is trying to change parent. so parent is passing down callback function which child can invoke when event happend in child.