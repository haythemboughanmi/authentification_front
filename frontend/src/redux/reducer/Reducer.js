import { GET_CURRENT, LOG_IN, REGISTER } from "../ActionType/ActionType";

const initialState = {
user:{}
}

const reducer= (state = initialState, { type, payload }) => {
  switch (type) {
    case LOG_IN :
    case REGISTER :
    localStorage.setItem("token",payload.token)   
    return {...state, user:payload.user}
        
    case GET_CURRENT :
        return {...state,user:payload.user}
        
    
    default:
        return state
  }

 
    
  }
export default reducer
