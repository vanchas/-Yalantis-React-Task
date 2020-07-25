import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import MonthsList from './components/months-list/MonthsList'
import UsersList from './components/users-list/UsersList'

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
