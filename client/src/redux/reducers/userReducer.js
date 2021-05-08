import { SET_USER, LOG_OUT } from "../actionType";

const initialState = {
  // list: [],
  currentUser: {},
  isAuth: false,
};


const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      };
    case LOG_OUT:
      localStorage.removeItem('token')
      // histori.push('/login')
      return {
        ...state,
        currentUser: {},
        isAuth: false,
         
      };
    
    default:
     return state;
  }
};

export default userReducer;
