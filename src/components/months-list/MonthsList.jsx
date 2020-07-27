import React from 'react'
import MonthsItem from './MonthsItem'
import styles from './month.module.css'
import months from '../../data/Months'

export default function MonthsList({ setUsersToShow, users }) {
  return (
    <ul className={styles.list}>
      {months.map(mon => (
        <MonthsItem
          month={mon}
          key={mon.number}
          users={users}
          setUsersToShow={setUsersToShow}
        />
      ))}
    </ul>
  )
}
