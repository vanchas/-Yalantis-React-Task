import React from 'react'
import { connect } from 'react-redux'
import MonthsItem from './MonthsItem'
import styles from './month.module.css'

function MonthsList({ months }) {
  return (
    <ul className={styles.list}>
      {months.map(mon => (
        <MonthsItem month={mon} key={mon.number} />
      ))}
    </ul>
  )
}

const mapStateToProps = (state) => ({
  months: state.app.months
})

export default connect(mapStateToProps, null)(MonthsList)
