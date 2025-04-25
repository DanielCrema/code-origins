import styles from "./index.module.css";

export default function ToDo({ item, setToDoList }) {
  const handleCheck = () => {
    setToDoList((prev) => {
      return prev.map((prevItem) => {
        if (prevItem.id === item.id) {
          return {
            ...prevItem,
            checked: !prevItem.checked,
          };
        }
        return prevItem;
      });
    });
  };

  const markedStyle = item.checked ? styles.markedBox : "";

  return (
    <div
      className={`
        ${styles.toDos} ${markedStyle}
    `}
    >
      <input
        type="checkbox"
        className={styles.toDoCheckBox}
        onClick={handleCheck}
      />
      <label className={styles.toDoText}>{item.value}</label>
    </div>
  );
}
