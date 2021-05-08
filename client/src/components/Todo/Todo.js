import "./todo.scss";
// import todoContext from '../../utils/todoContext/todoContext'
import TodoCard from '../TodoCard/TodoCard'
import {useDispatch, useSelector} from 'react-redux'
import {AddTodoFromForm} from '../../redux/reduxThunk/asyncFuncs'
import { useEffect } from "react";
import { useHistory } from "react-router";

function Todo(props) {
  // const { dispatch} = useContext(todoContext)

  const dispatch = useDispatch()
  const store = useSelector(store=>store)
  const userEmail = store.userReducer.currentUser?.email
  const isAuth = store.userReducer.isAuth
  // console.log(localStorage.getItem("token"));

  const history = useHistory()
  const formhandler = (e) => {
    const form = e.target
    e.preventDefault();
    
    const{
      todoName:{value:todoName},
      todoTextarea:{value:todoTextarea},
    }= e.target
    formhandler && 
    // fetch(`${process.env.REACT_APP_TODO}/addTodo`,{
    //   method:"POST",
    //   headers:{
    //     "Content-type": "Application/json", 
    //   },
    //   body: JSON.stringify({
    //     todoName,
    //     todoTextarea,
    //     userEmail
    //   })
    // })
    // .then(res=>res.json())
    // .then(data=>dispatch({type:"ADDONE", payload:data.newTodo}))
    dispatch(AddTodoFromForm(todoName,todoTextarea,userEmail))
    form.reset()
  };

  // Отсдеживаем токен, и если его нет то редирект на регистрацию
  useEffect(()=>{
    if(!localStorage.getItem("token")){
      history.push('/auth')
    }
  },[localStorage.getItem("token")])

  return (
    <section className="Todo">
      <div className="container">
        <div className="Todo-box">
          <form className="form" onSubmit={formhandler}>
            <div className="form-input">
              <input className="form-control" name="todoName" type="text" placeholder="todo-required" />
              <div className="form-textarea">
                <textarea

                  className="form-control form-textarea"
                  type="text"
                  name="todoTextarea"
                  placeholder="about - required"
                  rows="3"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary todo-btn">
              Добавить
            </button>
          </form>
          <div className="todo-card">
            <TodoCard />
          </div>
        </div>
       
      </div>
    </section>
  );
}

export default Todo;
