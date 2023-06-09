import React from 'react'
import Card from '../Card'
import data from '../../data.json'
import Filters from '../Filters'
import styles from './Main.module.scss'

const Main = ({ filters, handleClick, deleteItem, clear }) => {
  let todo = data.map((item) => {
    let allProperties = [item.role, item.level] 
    allProperties = allProperties.concat(item.languages)
    allProperties = allProperties.concat(item.tools)
    
    let x = true;
    for (let y=0; y<=filters.length - 1; y++){
      if (!allProperties.includes(filters[y])){
        x = false
      }
    }

    if (x === true){
      return <Card info={item} key={item.id} handleClick={handleClick} properties={allProperties} />
    }
  })

  return (
    <main className={styles.container}>
      <Filters filters={filters} deleteItem={deleteItem} clear={clear} />
      {todo}
    </main>
  )
}

export default Main