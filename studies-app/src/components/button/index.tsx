import React from "react";
import style from "./button.module.scss";

class Botão extends React.Component {
  render() {
    return <button className={style.botao}>{this.props.children}</button>;
  }
}

export default Botão;
