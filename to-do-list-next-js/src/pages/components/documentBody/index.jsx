import styles from "./index.module.css";
import ToDo from "../../toDoCheckboxes";

export default function DocumentBody({ toDoList, setToDoList }) {
  return (
    <div className={styles.toDoListMain}>
      <h2 className={styles.title}>Minhas Tasks</h2>
      <div
        className={styles.list}
      >
        {toDoList.map((item) => {
          return <ToDo key={item.id} item={item} setToDoList={setToDoList} />;
        })}
      </div>
    </div>
  );
}
