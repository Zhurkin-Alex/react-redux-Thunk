import React,{useRef} from "react";
import { useDispatch } from "react-redux";
import './login.scss'
import {setUser } from '../../redux/actionCreators'
import {useHistory } from 'react-router'
import {LoginUser} from '../../redux/reduxThunk/asyncFuncs'


function Login(props) {
  const email = useRef()
  const pasword = useRef()
  const dispatch = useDispatch()
  const histori = useHistory()


  const loginHandler = async (e) => {
    e.preventDefault();
    const form = e.target
    const emailUser = email.current.value
    const password = pasword.current.value

    // const response = await fetch(`${process.env.REACT_APP_AUTH}/login`, {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "Application/json",
    //   },
    //   body: JSON.stringify({
       
    //     email:email.current.value,
    //     password:pasword.current.value, 
             
    //   }),
    // })
    // const rezult = await response.json()
    // dispatch(setUser(rezult.User))
    // localStorage.setItem('token',rezult.token)
    dispatch(LoginUser(emailUser,password))

    histori.push('/todo')
    form.reset()
  };
  return (
    <div className="container">
      <div className="login-box">
        <form className="login-form" onSubmit={loginHandler}>
         
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              ref={email}
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Напишите ваш email
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              ref={pasword}
              name="pasword"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary registration-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
