import { Link } from "react-router-dom";
import "./ColorList.css";
function ColorList({ colorList }) {
  return (
    <div className="ColorList">
      <h2>Welcome to the Color Factory</h2>
      <Link to="/colors/new">Add a color</Link>
      <h4>Please select a color</h4>
      {colorList.map((c) => {
        return (
          <p>
            <Link to={`/colors/${c}`} key={c}>
              {c}
            </Link>
          </p>
        );
      })}
    </div>
  );
}

export default ColorList;
