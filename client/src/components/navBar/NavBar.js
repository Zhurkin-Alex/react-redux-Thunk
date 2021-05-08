import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/actionCreators";
import {useHistory } from 'react-router'

function NavBar(props) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  // console.log("store", store.userReducer);
  const isAuth = store.userReducer?.isAuth;
  const histori = useHistory()
  // ()=> dispatch(logOut())
  
  const loguotHandler =()=>{
    dispatch(logOut())
    histori.push('/auth')
  }


  return (
    <div className="navbar ">
      <nav className="navbar  navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav navbar-items">
              {!isAuth && (
                <div className="userRegistr ">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Регистрация
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/auth">
                    Вход
                  </Link>
                </li>
                </div>
              )}
              {isAuth && (
                <div className="userIn">
                  <li className="nav-item log-out"
                 onClick={loguotHandler}
                  
                 >
                 
                   Выход
                
               </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/todo"
                  >
                    To-do
                  </Link>
                </li>
                 
               </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
