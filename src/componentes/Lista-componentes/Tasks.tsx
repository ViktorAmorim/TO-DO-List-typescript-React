import { Trash } from "phosphor-react";
import styles from "./Tasks.module.css";
import { TaskInfo } from "../../App";

interface TasksProps {
  data: TaskInfo;
  taskContent: string;
  onDeleteTask: (id: number) => void;
  toggleStatusTask: ({ id, value }: { id: number; value: boolean }) => void;
}
export function Tasks({
  data,
  taskContent,
  onDeleteTask,
  toggleStatusTask,
}: TasksProps) {
  function handleDeleteTask() {
    console.log("Deletando tarefa com ID:", data.id);
    onDeleteTask(data.id);
  }

  function handlerTaskToggle() {
    toggleStatusTask({ id: data.id, value: !data.isChecked });
  }

  if (!data || !taskContent) {
    return null; // verificação para evitar acessar props undefined no devtools
  }

  return (
    <div className={styles.onlyTasks}>
      <div>
        <label htmlFor="checkbox" className={styles.labelInput}>
          <input type="checkbox" onClick={handlerTaskToggle} readOnly />
          <span className={styles.checkbox}>{taskContent}</span>
        </label>
      </div>
      <button onClick={handleDeleteTask}>
        <Trash size={24} color="#808080" />
      </button>
    </div>
  );
}
