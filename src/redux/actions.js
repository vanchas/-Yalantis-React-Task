export const FETCH_USERS = 'FETCH_USERS'
export const SET_USERS_TO_SHOW = 'SET_USERS_TO_SHOW'

export const fetchUsers = () => async (dispatch) => {
  return await fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users")
    .then(res => res.json())
    .then(data => {
      return dispatch({ type: FETCH_USERS, payload: data })
    }).catch(err => console.error(err))
}

export const setUsersToShow = (users) => {
  return { type: SET_USERS_TO_SHOW, payload: users }
}
