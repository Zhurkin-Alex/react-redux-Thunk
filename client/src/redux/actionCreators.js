import {ADDALL, CHECK, ADDONE, UPDATETODO, DELETE, SET_USER,LOG_OUT } from '../redux/actionType'

export const setUser = (payload)=>{
  return {
    type: SET_USER,
    payload
  }
}
export const logOut = (payload)=>{
  return {
    type: LOG_OUT,
    
  }
}
export const addAllAC = (payload)=>{
  return {
    type: ADDALL,
    payload
  }
}

export const checkAC = (payload)=>{
  return {
    type: CHECK,
    payload
  }
}

export const addOneAC = (payload)=>{
  return {
    type: ADDONE,
    payload
  }
}

export const updateAC = (payload)=>{
  return {
    type: UPDATETODO,
    payload
  }
}

export const deleteAC = (payload)=>{
  return {
    type: DELETE,
    payload
  }
}
