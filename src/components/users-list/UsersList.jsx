import React from 'react'
import UsersListItem from './UsersListItem'
import styles from './users.module.css'
import { connect } from 'react-redux'

function UsersList({ users }) {
  return (
    <>
      {users &&
        <ul className={styles.list}>
          {users.map((user, index) => (
            <UsersListItem user={user} key={user.id} index={index + 1} />
          ))}
        </ul>
      }
    </>
  )
}

const mapStateToProps = (state) => ({
  users: state.app.usersToShow
})

export default connect(mapStateToProps, null)(UsersList)
