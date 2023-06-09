import React from 'react'
import styles from './Propertie.module.scss'
import "@fontsource/league-spartan"

const Propertie = (props) => {
  return <li onClick={() => props.handleClick(props.item)} className={styles[props.className]}> {props.item}{props.item2} </li>
}

export default Propertie