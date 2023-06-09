import Header from "./components/Header";
import Main from './components/Main'
import MainNoFilters from './components/MainNoFilters'
import styles from './App.css'
import { useState } from 'react'

function App() {
  const [filters, setFilters] = useState([])

  const updateState = (e) => {
    let array = [...filters, e]
    let newArray = array.filter((item,index) => {
      return array.indexOf(item) === index;
    })
    setFilters(newArray)
  }

  const deleteElement = (e) => {
    let array = filters.filter((item) => {
      return item !== e;
    })
    setFilters(array)
  }

  return (
    <>
      <Header />
      {filters.length === 0 ? 
        <MainNoFilters handleClick={(e) => updateState(e)}/> :
        <Main filters={filters} 
          handleClick={(e) => updateState(e)} 
          deleteItem={(e) => deleteElement(e)}
          clear={() => setFilters([])}
        />
      }
    </>
  )
}

export default App;