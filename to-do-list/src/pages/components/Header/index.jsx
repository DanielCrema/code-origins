import { useState } from "react";
import styles from "./index.module.css";

export default function Header({ setToDoList }) {
  const [valueInput, setValueInput] = useState("");

  function handleButtonNewTodo(e) {
    e.preventDefault();

    // setToDoList((prev) => [...prev, valueInput]);
    setToDoList((prev) => {
      return [
        ...prev,
        {
          id: parseInt(Math.random() * 10000 * 9),
          value: valueInput,
          checked: false,
        },
      ];
    });
    setValueInput("");
  }

  const handleChangeInput = (event) => {
    setValueInput(event.target.value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Lista de <span>Tarefas</span>
      </h1>
      <form className={styles.addToDo}>
        <input
          type="text"
          placeholder="Adicionar novo todo..."
          className={styles.newToDoInput}
          value={valueInput}
          onChange={handleChangeInput}
        />
        <button onClick={handleButtonNewTodo} type="submit">
          <img src="/assets/img/check-icon.png" alt="Icon" />
        </button>
      </form>
    </div>
  );
}