import axios from 'axios'
import { GET_CURRENT, LOG_IN, REGISTER } from '../ActionType/ActionType'


export const login =(data,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/user/login',data)
        dispatch({
            type:LOG_IN,
            payload:res.data
        })
        navigate("/profile")
    } catch (error) {
        console.log(error)
    }
}

export const register =(data,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/user/',data)
        dispatch({
            type:REGISTER,
            payload:res.data
        })
        navigate('/profile')
    } catch (error) {
        console.log(error)
    }
}

export const getCurrent= ()=>async(dispatch)=>{
   const config = {
    headers: {
        token: localStorage.getItem("token"),
      },
   }
    try {
        const res = await axios.get("/user/get",config)
        dispatch({
            type:GET_CURRENT,
            payload:res.data
        })
    } catch (error) {
        console.log(error)
    }
}
// export const get_current= ()=>async(dispatch)=> {
//     const config = {
//       headers: {
//         token: localStorage.getItem("token")
//       }
//     }
//     try {
//       const res = await axios.get("/user/get", config)
//       dispatch({ type: GET_CURRENT, payload: res.data })
//     } catch (error) {
//       console.log(error)
//     }
//   };

