import React, { useEffect, useState } from 'react'
import colorSchema from '../../data/Colors'
import styles from './month.module.css'

export default function MonthsItem({ month, users, setUsersToShow }) {
  const [monthUsersState, setMonthUsersState] = useState([])
  const [monthColor, setMonthColor] = useState(null)

  const sortUsersByMonths = () => {
    const usersInMonth = users
      .filter(user => new Date(user.dob).getMonth() + 1 === month.number);

    setMonthUsersState(usersInMonth)
    monthColorHandler(usersInMonth.length)
  }

  const monthColorHandler = (usersLength) => {
    colorSchema.forEach(col => {
      if (usersLength >= col.min
        && usersLength <= col.max) {
        setMonthColor(col.color)
      }
    })
  }

  useEffect(() => {
    if (users) sortUsersByMonths()
  }, [users])

  return (
    <li className={styles.list_item}
      style={monthColor
        ? { backgroundColor: monthColor }
        : null}
      onMouseEnter={() => setUsersToShow(monthUsersState)}
      onMouseLeave={() => setUsersToShow(null)}
    >
      <span>
        {month.name} <small>({monthUsersState.length})</small>
      </span>
    </li>
  )
}
