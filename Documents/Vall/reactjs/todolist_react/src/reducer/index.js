import { createStore } from "redux"
const todos = (state, action) => {
    const {type} = action

    if(type === "ADD_TODO") {

    } else if(type === "DELETE_TODO") {

    } else if(type === "DONE_TODO") {

    } else {
        return state
    }
    
  }
  
  export default todos