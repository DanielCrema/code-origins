import { useCallback, useState } from 'react'
import { TodoItem } from '../components/ToDoItem'

type UseTodoReturn = {
  valueInput: string;
  setValueInput: React.Dispatch<React.SetStateAction<string>>;
  todos: TodoItem[];
  createTodo: () => void;
  handleCompleted: (id: number) => void;
  handleDelete: (id: number) => void;
}

const useTodo = (): UseTodoReturn => {
  const [valueInput, setValueInput] = useState<string>('')
  const [todos, setTodos] = useState<TodoItem[]>([{
    id: 1,
    title: 'Estudar React',
    completed: false
  }, {
    id: 2,
    title: 'Estudar Next.js',
    completed: false
  }, {
    id: 3,
    title: 'Estudar TypeScript',
    completed: false
  }, {
    id: 4,
    title: 'Estudar Node.js',
    completed: false
  }, {
    id: 5,
    title: 'Estudar MongoDB',
    completed: false
  }, {
    id: 6,
    title: 'Estudar Firebase',
    completed: false
  }, {
    id: 7,
    title: 'Estudar GraphQL',
    completed: false
  }, {
    id: 8,
    title: 'Estudar Prisma',
    completed: false
  }, {
    id: 9,
    title: 'Estudar Docker',
    completed: false
  }, {
    id: 10,
    title: 'Estudar Kubernetes',
    completed: false
  }, {
    id: 11,
    title: 'Estudar AWS',
    completed: false
  }, {
    id: 12,
    title: 'Estudar Azure',
    completed: false
  }, {
    id: 13,
    title: 'Estudar GCP',
    completed: false
  }, {
    id: 14,
    title: 'Estudar Flutter',
    completed: false
  }, {
    id: 15,
    title: 'Estudar Dart',
    completed: false
  }])

  const createTodo = useCallback(() => {
    if (valueInput === '') {
      alert('Preencha o campo!')
      return
    }

    const newTodo: TodoItem = {
      id: Math.random(),
      title: valueInput,
      completed: false
    }

    setTodos([...todos, newTodo])
    setValueInput('')
  }, [todos, valueInput])
  
  const handleCompleted = useCallback((id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })

    setTodos(updatedTodos)
  }, [todos])

  const handleDelete = useCallback((id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }, [todos])

  return {
    valueInput,
    setValueInput,
    todos,
    createTodo,
    handleCompleted,
    handleDelete
  }

}

export default useTodo;