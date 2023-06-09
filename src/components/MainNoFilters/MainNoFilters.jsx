import React from 'react'
import Card from '../Card'
import styles from './MainNoFilters.module.scss'
import data from '../../data.json'

const Main = ({ handleClick }) => {
  let todo = data.map((item) => {
    let allProperties = [item.role, item.level] 
    allProperties = allProperties.concat(item.languages)
    allProperties = allProperties.concat(item.tools)
    
    return <Card info={item} key={item.id} handleClick={handleClick} properties={allProperties} />
  })
  
  return (
    <main className={styles.main}>
      {todo}
    </main>
  )
}

export default Main