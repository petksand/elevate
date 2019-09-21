import React from "react";
import "./App.css";
import { Grommet, grommet } from "grommet";
import UniGrid from "./components/UniGrid";

function App() {
  return (
    <Grommet theme={grommet} full>
      <UniGrid></UniGrid>
    </Grommet>
  );
}

export default App;
