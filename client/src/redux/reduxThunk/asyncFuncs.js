import {checkAC,updateAC, deleteAC,setUser} from '../actionCreators'

// from registtration.js
export const RegistrUser =  (nameUser,emailUser,password,passwordCheck)=>{
  return async(dispatch) =>{
    const response = await fetch(`${process.env.REACT_APP_AUTH}/registration`, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        name:nameUser,
        email:emailUser,
        password:password, 
        paswordcheck:passwordCheck       
      }),
    })
    const rezult = await response.json()
    dispatch(setUser(rezult.User))
    localStorage.setItem('token',rezult.token)
  }
}

// from login
export const LoginUser =  (emailUser,password)=>{
  return async(dispatch) =>{
    const response = await fetch(`${process.env.REACT_APP_AUTH}/login`, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
       
        email:emailUser,
        password:password, 
             
      }),
    })
    const rezult = await response.json()
    dispatch(setUser(rezult.User))
    localStorage.setItem('token',rezult.token)
  }
}

// from App for auth user-token
export const AuthUser =()=>{
 
  return async(dispatch) =>{
    const response = await fetch(`${process.env.REACT_APP_AUTH}/auth`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    const rezult = await response.json();
    rezult.success ? dispatch(setUser(rezult.user)): localStorage.removeItem("token");
    localStorage.setItem("token", rezult.token);
  }
}

// from Todo.js
export const AddTodoFromForm = (todoName,todoTextarea,userEmail)=>{
  return (dispatch) =>{
    fetch(`${process.env.REACT_APP_TODO}/addTodo`,{
      method:"POST",
      headers:{
        "Content-type": "Application/json", 
      },
      body: JSON.stringify({
        todoName,
        todoTextarea,
        userEmail
      })
    })
    .then(res=>res.json())
    .then(data=>dispatch({type:"ADDONE", payload:data.newTodo}))
  }
}

// from TodoCard.js
export const AddAllTodo = (userEmail) => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_TODO}/findAll`, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        userEmail,
      }),
    })
      .then((res) => res.json())
      .then((data) => dispatch({ type: "ADDALL", payload: data.allTodo }));
  };
};

// from TodoItem.js
export const todoItemCheckCard =(todoId) =>{
  return (dispatch)=>{
    fetch(`${process.env.REACT_APP_TODO}/checkbox`, {
      method: "PUT",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        id: todoId,
      }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(checkAC(data.id)));
  }
}

// from TodoItem.js
export const updateTodo = (todoId,name,todoTextarea)=>{
  return (dispatch)=>{
    fetch(`${process.env.REACT_APP_TODO}/updateTodo`, {
      method: "PUT",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        id: todoId,
        name,
        todoTextarea,
      }),
    })
      .then((res) => res.json())
      .then((data) =>dispatch(updateAC(data.updateTodo)));
  }
}

// from TodoItem.js
export const deleteTodo = (todoId,userEmail)=>{
  return (dispatch)=>{
    fetch(`${process.env.REACT_APP_TODO}/delete`, {
      method: "DELETE",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        id:todoId,
        userEmail
        
      }),
    })
    .then(res=> res.json())
    .then(data=>dispatch(deleteAC(data.id)))
  }
}
