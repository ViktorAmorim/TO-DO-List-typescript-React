import styles from "./App.module.css";
import { Header } from "./componentes/Header";
import { Input } from "./componentes/Input";
import { Button } from "./componentes/Button";
import { HeaderBody } from "./componentes/Lista-componentes/HeaderBody";
import { BodyClean } from "./componentes/Lista-componentes/BodyClean";
import { Tasks } from "./componentes/Lista-componentes/Tasks";
import { FormEvent, useState } from "react";

export interface TaskInfo {
  id: number;
  text: string;
  isChecked: boolean;
}

export function App() {
  const [newTasks, setNewTasks] = useState<TaskInfo[]>([]);
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event?.preventDefault();

    const newTask: TaskInfo = {
      id: new Date().getTime(),
      text: newTaskText,
      isChecked: false,
    };

    setNewTasks((state) => [...state, newTask]);
    setNewTaskText("");

    console.log(newTasks);
  }

  function create(task: string) {
    setNewTaskText(task);
  }

  function deleteTask(id: number) {
    const taskWithoutDeletedOne = newTasks.filter((task) => {
      return task.id !== id;
    });

    if (confirm("Excluir esta tarefa?")) {
      setNewTasks(taskWithoutDeletedOne);
    }
  }
  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = newTasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value };
      }
      return task;
    });
    setNewTasks(updatedTasks);

    console.log(newTasks);
  }

  const completedTaskCount = newTasks.filter((task) => task.isChecked).length;

  return (
    <main>
      <Header />
      <section className={styles.sectionContainer}>
        <div>
          <form
            onSubmit={handleCreateNewTask}
            className={styles.positionInputButton}
          >
            <Input dataTask={create} value={newTaskText} />
            <Button />
          </form>
        </div>
        <div>
          <HeaderBody
            taskCounter={newTasks.length}
            completedTaskCount={completedTaskCount}
          />
          <div className={styles.bodyPosition}></div>
          <div className={styles.TasksPosition}>
            {newTasks.length > 0 ? (
              <div>
                {newTasks.map((content) => {
                  return (
                    <Tasks
                      key={content.id}
                      taskContent={content.text}
                      data={content}
                      onDeleteTask={deleteTask}
                      toggleStatusTask={handleToggleTask}
                    />
                  );
                })}
              </div>
            ) : (
              <BodyClean />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
