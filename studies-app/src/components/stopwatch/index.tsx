import Botão from "../button";
import Relogio from "./clock";
import style from "./stopwatch.module.scss";

export default function Cronometro() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Botão>Começar</Botão>
    </div>
  );
}
