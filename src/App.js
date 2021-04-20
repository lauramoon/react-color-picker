import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import ColorList from "./ColorList";
import Color from "./Color";
import NewColorForm from "./NewColorForm";

import "./App.css";

function App() {
  const initialColors = ["red", "green", "blue"];
  const [colorList, setColorList] = useState(initialColors);

  const addColor = (newColor) => {
    const tempList = colorList.filter((c) => c !== newColor);
    setColorList(() => [newColor, ...tempList]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors/new">
            <NewColorForm addColor={addColor} />
          </Route>
          <Route exact path="/colors/:color">
            <Color colorList={colorList} />
          </Route>
          <Route exact path="/colors">
            <ColorList colorList={colorList} />
          </Route>
          <Redirect to="/colors" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
