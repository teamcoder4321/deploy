import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'



function App() {
  const [test, settest] = useState([])

useEffect(()=>{ 
    axios.get('/api/test')
    .then(response => {
        settest(response.data)
    }
  )
  .catch((error) => {
    console.log(error)
  }
 )
})

  return (
  <>
    <h1>hello world</h1>
    <p>test: {test.length}</p>

    {
      test.map((test, index) => (
        <div key={test.id}>
          <h3>id: {test.name}</h3>
          <p>name: {test.email}</p>
         </div>
      ))
    }
    </>
  )
}

export default App
