import styles from "./Button.module.css";
import { PlusCircle } from "phosphor-react";

export function Button() {
  return (
    <button type="submit" className={styles.Button}>
      Criar
      <PlusCircle size={16} color="#f2f2f2" weight="bold" />
    </button>
  );
}
