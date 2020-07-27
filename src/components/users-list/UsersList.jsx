import React from 'react'
import UsersListItem from './UsersListItem'
import styles from './users.module.css'

export default function UsersList({ users }) {

  return (
    <>
      {users && users.length ?
        <ul className={styles.list}>
          {users.map((user, index) => (
            <UsersListItem user={user} key={user.id} index={index + 1} />
          ))}
        </ul>
        : users && !users.length
          ? <div className={styles.message}>Sorry, there is no one user</div>
          : null
      }
    </>
  )
}

