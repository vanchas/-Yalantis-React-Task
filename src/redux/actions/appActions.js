import HttpRequest from '../../utils/http/HttpRequest'
export const FETCH_USERS = 'FETCH_USERS'
export const SET_USERS_TO_SHOW = 'SET_USERS_TO_SHOW'

export const fetchUsers = () => (dispatch) => {
  HttpRequest.execute("https://yalantis-react-school-api.yalantis.com/api/task0/users", "GET")
    .then(data => {
      return dispatch({ type: FETCH_USERS, payload: data })
    }).catch(err => console.error(err))
}

export const setUsersToShow = (users) => {
  return { type: SET_USERS_TO_SHOW, payload: users }
}
