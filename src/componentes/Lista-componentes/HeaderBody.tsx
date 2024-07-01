import styles from "./HeaderBody.module.css";

export interface AlphaProps {
  taskCounter: number;
  completedTaskCount: number;
}

export function HeaderBody({ taskCounter, completedTaskCount }: AlphaProps) {
  return (
    <header className={styles.headerBody}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{taskCounter}</span>
      </aside>

      <aside>
        <p>Concluídas</p>
        <span>
          {completedTaskCount} de {taskCounter}
        </span>
      </aside>
    </header>
  );
}
