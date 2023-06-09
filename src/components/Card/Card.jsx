import React from 'react'
import Propertie from '../Propertie'
import styles from './Card.module.scss'
import "@fontsource/league-spartan"
const preLink = require.context('../../assets', true)

const Card = ({ info, handleClick, properties }) => {
  return (
    <div className={info.featured === true ? styles.cardFeatured : styles.card}>
      <div className={styles.cardPart1}>
        <img src={preLink(info.logo)} alt='Company logo' className={styles.img} />
        <span className={styles.container1}>
          <p className={styles.company}>{info.company}</p>
          {info.new && <p className={styles.new}>new!</p>}
          {info.featured && <p className={styles.featured}>featured</p>}
        </span>
        <p className={styles.position}>{info.position}</p>
        <span className={styles.container2}>
          <p className={styles.info}>{info.postedAt}</p>
          <p className={styles.info}>•</p>
          <p className={styles.info}>{info.contract}</p>
          <p className={styles.info}>•</p>
          <p className={styles.info}>{info.location}</p>
        </span>
      </div>
      <hr className={styles.line} />
      <ul className={styles.container3}>
        {properties.map((item) => {
          return <Propertie item={item} key={item} handleClick={handleClick} className='properties' />
        })}
      </ul>
    </div>
  )
}

export default Card