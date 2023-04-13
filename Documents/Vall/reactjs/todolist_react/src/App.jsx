import { useState } from 'react'
import Todolist from './components/todolist.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-dark h-[100vh]">
        <Todolist />
    </div>
  )
}

export default App
