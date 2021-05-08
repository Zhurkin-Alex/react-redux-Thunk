import React, { useState, useContext } from "react";
import "./todoItem.scss";
import {useDispatch, useSelector} from 'react-redux'

import { checkAC,updateAC,deleteAC} from '../../redux/actionCreators'
import {todoItemCheckCard, updateTodo, deleteTodo} from '../../redux/reduxThunk/asyncFuncs'

function TodoItem({ todo }) {
  
  // console.log("todo",todo);
  const dispatch = useDispatch()
  const store = useSelector(store=>store)
  const userEmail = store.userReducer.currentUser?.email
  const todoId = todo._id
  const todoItemCheck = () => {
    todoItemCheck &&
      // fetch(`${process.env.REACT_APP_TODO}/checkbox`, {
      //   method: "PUT",
      //   headers: {
      //     "Content-type": "Application/json",
      //   },
      //   body: JSON.stringify({
      //     id: todo._id,
      //   }),
      // })
      //   .then((res) => res.json())
      //   // .then(data=>console.log(data))
      //   .then((data) => dispatch(checkAC(data.id)));
      dispatch(todoItemCheckCard(todoId))
  }

  const [update, setUpdate] = useState(false);
  const updateHandler = () => {
    setUpdate(true);
  };

  //  при нажатии на кнопку Save, изменилось состояние update
  const saveHandler = (e) => {
    e.preventDefault();
   
    setUpdate(false);
    const {
      name: { value: name },
      todoTextarea: { value: todoTextarea },
    } = e.target;
    // fetch(`${process.env.REACT_APP_TODO}/updateTodo`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-type": "Application/json",
    //   },
    //   body: JSON.stringify({
    //     id: todo._id,
    //     name,
    //     todoTextarea,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) =>dispatch(updateAC(data.updateTodo)));
    dispatch(updateTodo(todoId,name,todoTextarea))
  };

  // delete card todo
  const deleteHandler = ()=>{
   
    // fetch(`${process.env.REACT_APP_TODO}/delete`, {
    //   method: "DELETE",
    //   headers: {
    //     "Content-type": "Application/json",
    //   },
    //   body: JSON.stringify({
    //     id:todo._id,
    //     userEmail
        
    //   }),
    // })
    // .then(res=> res.json())
    // .then(data=>dispatch(deleteAC(data.id)))
    dispatch(deleteTodo(todoId,userEmail))
  }


  return (
    <>
      {/* check:true,  изменять нельзя, отрисовка готовой */}
      {todo && todo?.todoadd && (
        <div className="todo-item__page done">
          <div>
            <div className="todo-item__box done-box">
              <div className="todo-item__text">
                <input onClick={todoItemCheck} type="checkbox" defaultChecked />
                <div className="todo-item__name">{todo?.todoName}</div>
                <div className="todo-item__textarea">{todo?.todoTextarea}</div>
              </div>
              <div className="todo-item__btn">
                <button
                  onClick={deleteHandler}
                  type="submit"
                  className="btn btn-primary todo-item__delete"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* check:false, можно менять, update не нажато*/}
      {!todo?.todoadd && !update && (
        <div className="todo-item__page">
          <div>
            <div className="todo-item__box">
              <div className="todo-item__text">
                <input onClick={todoItemCheck} type="checkbox" />
                <div className="todo-item__name">{todo?.todoName}</div>
                <div className="todo-item__textarea">{todo?.todoTextarea}</div>
              </div>
              <div className="todo-item__btn">
                <button
                  onClick={updateHandler}
                  type="submit"
                  className="btn btn-primary todo-item__update"
                >
                  Update
                </button>
                <button
                  onClick={deleteHandler}
                  type="submit"
                  className="btn btn-primary todo-item__delete"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* update нажато, в состоянии изменения */}
      {update && (
        <div className="todo-item__page">
          <form onSubmit={saveHandler}>
            <div className="todo-item__box">
              <div className="todo-item__text">
                <div className="todo-item__name">
                  <input name="name" defaultValue={todo.todoName} />{" "}
                </div>

                <div className="todo-item__textarea">
                  <input
                    name="todoTextarea"
                    className="todo-textarea"
                    defaultValue={todo.todoTextarea}
                    rows="1"
                  />
                </div>
              </div>
              <div className="todo-item__btn">
                <button
                  // onClick={chencgHandler}
                  type="submit"
                  className="btn btn-primary  todo-item__save"
                >
                  Save
                </button>
                {/* <button
                  type="submit"
                  className="btn btn-primary todo-item__delete"
                >
                  Delete
                </button> */}
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default TodoItem;
