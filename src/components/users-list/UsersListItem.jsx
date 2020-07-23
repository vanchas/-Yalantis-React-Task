import React from 'react'
import styles from './users.module.css'

export default function UsersListItem({ user, index }) {
  return (
    <li className={styles.list_item}>
      <i>{index}</i> <b>{user.firstName} {user.lastName}</b>
    </li>
  )
}
