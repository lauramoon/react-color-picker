import { Redirect, useParams } from "react-router-dom";
import "./Color.css";

function Color({ colorList }) {
  const { color } = useParams();
  if (colorList.includes(color))
    return <div className="Color" style={{ backgroundColor: color }}></div>;
  return <Redirect to="/colors" />;
}

export default Color;
