import { useState } from 'react'
import './App.css'
import CountryContainer from './containers/CountryContainer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>    <h1>Country Bucket List</h1>
</header>
    <CountryContainer/>

    </>
  )
}

export default App
