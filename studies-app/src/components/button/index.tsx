import React from "react";
import style from "./button.module.scss";

class Botão extends React.Component<{ texto: string }> {
  render() {
    return <button className={style.botao}>{this.props.texto}</button>;
  }
}

export default Botão;
