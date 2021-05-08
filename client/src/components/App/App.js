import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import Todo from "../Todo/Todo";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUser, logOut } from "../../redux/actionCreators";
// import store from '../../redux/store'
import { useHistory } from "react-router";
import Errors from "../Error/Error";
import { AuthUser } from "../../redux/reduxThunk/asyncFuncs";

function App() {
  // const [state, dispatch] = useReducer(reducer, { list: [] });
  // const isAutn = useSelector(store=>store.state.User.isAutn)
  const store = useSelector((store) => store);
  const isAuth = store.userReducer?.isAuth;
  // console.log(isAuth);
  const histori = useHistory();
  const dispatch = useDispatch();

  // console.log(localStorage.getItem('token'))
  useEffect(async () => {
    try {
      //  const response = await fetch(`${process.env.REACT_APP_AUTH}/auth`, {
      //   headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      // });
      // const rezult = await response.json();
      // console.log(rezult);
      // rezult.success
      //   ? dispatch(setUser(rezult.user))
      //   : localStorage.removeItem("token");
      // localStorage.setItem("token", rezult.token);

      dispatch(AuthUser());
    } catch (error) {
      localStorage.removeItem("token");
    }
  }, []);

  return (
    <>
      {/* <Provider store={store}> */}
      {/* <todoContext.Provider value={{ state, dispatch }}> */}
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Registration />
            </Route>

            <Route path="/auth">
              <Login />
            </Route>

            <Route path="/todo">
              <Todo />
            </Route>

            <Route path="*">
              <Errors />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
      {/* </todoContext.Provider> */}
      {/* </Provider> */}
    </>
  );
}

export default App;
