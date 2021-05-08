// Подключение метода для главного редьюсера
import {combineReducers} from 'redux'

//импорт дочерних редьюсеров
import  todoReducer from './todoReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  todoReducer,
  userReducer
})


export default rootReducer
