<<<<<<< HEAD
import Count from "./components/Counter"
import './App.css'

function App() {
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
>>>>>>> e55ebf543f633f2c68b704ffc3db114d1ed3fb91

  return (
    <>
      <div>
<<<<<<< HEAD
        <Count/>
      </div>
=======
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
>>>>>>> e55ebf543f633f2c68b704ffc3db114d1ed3fb91
    </>
  )
}

export default App
