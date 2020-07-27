import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import UsersListItem from '../../components/users-list/UsersListItem'
import UsersList from '../../components/users-list/UsersList'

describe('Link', () => {
  it('should render correctly', () => {
    const user = {
      firstName: 'Mark', lastName: 'Tven', id: '1u8a7stgda7sg'
    }
    const output = shallow(
      <UsersListItem user={user} index={0} />
    )
    expect(shallowToJson(output)).toMatchSnapshot()
  })

  it('should render correctly', () => {
    const users = [
      { firstName: 'Mark', lastName: 'Tven', id: '18f7tsdfg8sdt' },
      { firstName: 'Ilon', lastName: 'Mask', id: '2gas7itd7ait7' }
    ]
    const output = shallow(
      <UsersList users={users} />
    )
    expect(shallowToJson(output)).toMatchSnapshot()
  })
})