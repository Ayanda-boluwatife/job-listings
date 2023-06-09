import React from 'react'
import Propertie from '../Propertie'
import styles from './Filters.module.scss'

const Filters = ({ filters, deleteItem, clear}) => {
  return (
    <>
      {filters.length !== 0 && 
        <div className={styles.container}>
          <ul className={styles.container2}>
            {filters.map((item) => { return (
              <span className={styles.propertie} key={item}>
                <Propertie item={item} handleClick={() => {}} className='propertiesHeader'/>
                <button onClick={() => deleteItem(item)} className={styles.deleteItem} />
              </span>
            )})}
          </ul>
          <button className={styles.clear} onClick={clear}>Clear</button>
        </div>
      }
    </>
  )
}

export default Filters