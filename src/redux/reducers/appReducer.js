import { FETCH_USERS, SET_USERS_TO_SHOW } from "../actions/appActions";

const initialState = {
  users: null,
  usersToShow: null,
  months: [
    { name: "January", number: 1 },
    { name: "February", number: 2 },
    { name: "March", number: 3 },
    { name: "April", number: 4 },
    { name: "May", number: 5 },
    { name: "June", number: 6 },
    { name: "July", number: 7 },
    { name: "August", number: 8 },
    { name: "September", number: 9 },
    { name: "October", number: 10 },
    { name: "November", number: 11 },
    { name: "December", number: 12 },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {

    case FETCH_USERS:
      return { ...state, users: action.payload }

    case SET_USERS_TO_SHOW:
      return { ...state, usersToShow: action.payload }

    default:
      return state;
  }
};
