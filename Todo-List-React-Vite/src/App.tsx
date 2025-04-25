import './App.css'

import Header from './components/Header/header.tsx'
import Button from './components/Button/button.tsx'
import Input from './components/Input/input.tsx'
import ToDoItem from './components/ToDoItem/index.tsx'
import useTodo from './hooks/useTodo.tsx'

function App() {
  const { 
    valueInput,
    setValueInput,
    todos,
    createTodo,
    handleCompleted,
    handleDelete
  } = useTodo()

    console.log("🚀 ~ App ~ valueInput, setValueInput, todos, createTodo, handleCompleted, handleDelete:", 
      {valueInput,
        setValueInput,
        todos,
        createTodo,
        handleCompleted,
        handleDelete})

  /**
   * Hooks
   * useState: Hook que permite adicionar estado a componentes funcionais
   * useMemo: Hook que permite memorizar valores computados
   * useCallback: Hook que permite criar funções que não são recriadas a cada renderização
   * useRef: Hook que permite acessar o DOM de um componente
   * useContext: Hook que permite acessar o contexto de um componente
   * Custom Hooks: Hooks criados pelo usuário
   */

  // Div position - static - default
  // Relative - em relação a si mesmo
  // Absolute - em relação ao pai
  // Fixed - em relação a tela
  // Sticky - em relação ao scroll
  // !== de static 


  return (
    <div className='flex flex-col h-screen'>
      <Header title='To-Do List'>
        <div className='h-12 flex justify-center items-center w-[400px] relative translate-y-3/4'>
          <Input 
            placeholder='Escreva o seu to-do' 
            value={valueInput} 
            onChange={(e) => setValueInput(e.currentTarget.value)} 
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                setValueInput(e.currentTarget.value)
                createTodo()
              }
            }}
          />
          <Button 
            variant='primary' 
            onClick={createTodo}
          >
            Criar
          </Button>
        </div>
      </Header>
      <main className='my-12 mx-auto max-w-[400px] w-full h-full flex flex-col gap-2.5 overflow-y-auto'>
        {todos?.map((todo, idx) => 
          <ToDoItem 
            key={`todo-id-${idx + 1}`}
            todo={todo}
            onCompleted={handleCompleted}
            onDelete={handleDelete}
          />
        )}
      </main>
    </div>
  )
}

export default App
