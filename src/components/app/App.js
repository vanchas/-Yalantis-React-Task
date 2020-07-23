import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import MonthsList from '../months-list/MonthsList'
import UsersList from '../users-list/UsersList'

function App() {
  return (
    <Provider store={store}>
      <div className={`App`}>
        <MonthsList />
        <UsersList />
      </div>
    </Provider>
  );
}

export default App
