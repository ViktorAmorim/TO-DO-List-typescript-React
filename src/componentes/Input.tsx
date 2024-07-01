import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  dataTask: (task: string) => void;
}

export function Input({ dataTask, ...props }: InputProps) {
  //
  //
  function handleNewTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newText = event.target.value;

    dataTask(newText);
  }

  return (
    <input
      className={styles.Input}
      placeholder="Adicione uma nova tarefa"
      onChange={handleNewTextChange}
      value={props.value}
      {...props}
    />
  );
}
