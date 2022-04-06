import React from "react";
import Formulario from "../components/form";
import Lista from "../components/list";
import Cronometro from "../components/stopwatch";
import style from "./App.module.scss";

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
