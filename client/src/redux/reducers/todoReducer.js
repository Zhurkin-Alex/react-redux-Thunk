// import { SET_USER, LOG_OUT } from "../actionType";


const initialState = {
  list: [],
  // currentUser: {},
  // isAuth: false,
};

const todoReducer = (state = initialState, action) => {

  switch (action.type) {
    // case SET_USER:
    //   return {
    //     ...state,
    //     currentUser: action.payload,
    //     isAuth: true,
    //   };
    // case LOG_OUT:
    //   localStorage.removeItem('token')
    //   // histori.push('/login')
    //   return {
    //     ...state,
    //     currentUser: {},
    //     isAuth: false,
         
    //   };
    case "ADDONE":
      return {
        ...state,
        list:[ ...state?.list, action.payload],
      };
    case "ADDALL":
      return {
        ...state,
        list: action.payload,
      };
    case "CHECK":
      return {
        ...state,
        list: state.list.map((el) => {
          return el._id === action.payload
            ? { ...el, todoadd: !el.todoadd }
            : el;
        }),
      };
    case "UPDATETODO":
      // console.log(action.payload);
      return {
        ...state,
        list: state.list.map((el) => {
          return el._id === action.payload._id ? { ...action.payload } : el;
        }),
      };
    case "DELETE":
      // console.log(action.payload);
      return {
        ...state,
        list: state.list.filter((el) => {
          return el._id !== action.payload;
        }),
      };

    default:
      return state;
  }
};

export default todoReducer;
