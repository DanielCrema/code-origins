import { useState } from "react";
import Header from "./components/Header";
import DocumentBody from "./components/DocumentBody";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [toDoList, setToDoList] = useState([]);

  console.log("toDoList =", toDoList);

  return (
    <div className={styles.main}>
      <Header setToDoList={setToDoList} />
      <DocumentBody toDoList={toDoList} setToDoList={setToDoList} />
    </div>
  );
}
