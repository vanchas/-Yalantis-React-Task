import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import MonthsList from '../../components/months-list/MonthsList'
import MonthsItem from '../../components/months-list/MonthsItem'
import UsersList from '../../components/users-list/UsersList'


describe('Link', () => {
  it('should render correctly', () => {
    const month = { name: "January", number: 1 }
    const users = [
      { firstName: 'Mark', lastName: 'Tven', id: '18f7tsdfg8sdt' },
      { firstName: 'Ilon', lastName: 'Mask', id: '2gas7itd7ait7' }
    ]
    const output = shallow(
      <MonthsItem
        month={month}
        users={users}
      />
    )
    expect(shallowToJson(output)).toMatchSnapshot()
  })

  it('should render correctly', () => {
    const users = [
      { firstName: 'Mark', lastName: 'Tven', id: '18f7tsdfg8sdt' },
      { firstName: 'Ilon', lastName: 'Mask', id: '2gas7itd7ait7' }
    ]
    const output = shallow(
      <MonthsList
        users={users}
      />
    )
    expect(shallowToJson(output)).toMatchSnapshot()
  })

  it('should render users list after mouseover event on month item', () => {
    const month = { name: "January", number: 1 }
    const users = [
      { firstName: 'Mark', lastName: 'Tven', id: '18f7tsdfg8sdt' },
      { firstName: 'Ilon', lastName: 'Mask', id: '2gas7itd7ait7' }
    ]
    const usersList = shallow(<UsersList />)
    const output = shallow(
      <MonthsItem
        month={month}
        users={users}
      />)
    output.simulate('mouseover')
    expect(shallowToJson(usersList)).toMatchSnapshot()
  });
})