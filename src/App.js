import React, { useState, useEffect } from 'react'
import './App.css'
import MonthsList from './components/months-list/MonthsList'
import UsersList from './components/users-list/UsersList'

function App() {
  const [users, setUsers] = useState(null)
  const [usersToShow, setUsersToShow] = useState(null)

  const fetchUsers = async () => {
    return await fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className={`App`}>
      <MonthsList
        users={users}
        setUsersToShow={setUsersToShow}
      />
      <UsersList
        users={usersToShow}
      />
    </div>
  );
}

export default App
