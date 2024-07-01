import styles from "./BodyClean.module.css";
import clips from "../../assets/clip-board.svg";

export function BodyClean() {
  return (
    <div className={styles.BodyClean}>
      <img src={clips} alt="prancheta" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
