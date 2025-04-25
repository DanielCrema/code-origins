import React from "react";
import styles from './styles.module.css'
import Button from "../Button/button";


export type TodoItem = {
  id: number
  title: string
  completed: boolean
}

type Props = {
  todo: TodoItem
  onCompleted: (id: number) => void
  onDelete: (id: number) => void
}

const ToDoItem: React.FC<Props> = ({ todo, onCompleted, onDelete }) => {
  

  return (
    <div className={styles.todoItem}>
      <span className={todo.completed ? styles.completed : ''}>{todo.title}</span>
      <div className={styles.buttons}>
      
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onCompleted(todo.id)}
      />
      <Button variant="destructive" onClick={() => onDelete(todo.id)}>
        Remover
      </Button>
      </div>
    </div>
  )
}

export default ToDoItem;