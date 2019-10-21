import {axiosWithAuth} from "../utils/axiosWithAuth";

export const START_SIGNUP = "START_SIGNUP";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const PostSignUp = (form) => dispatch => {
    dispatch({type:START_SIGNUP});
        axiosWithAuth()
        .post("", form)
        .then(res =>{
            console.log("signup post res", res)
            dispatch({type: SIGNUP_SUCCESS})
        })
        .catch(err =>{
            dispatch({type: SIGNUP_FAILURE, payload: err.response})
        })
        
}



export const START_LOGIN = "START_LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const PostLogin = (form) => dispatch => {
    dispatch({type:START_LOGIN});
        axiosWithAuth()
        .post("",form)
        .then(res =>{
            console.log("login post res",res)
            localStorage.setItem("token", )
            dispatch({type:LOGIN_SUCCESS})
        })
        .catch(err =>{
            dispatch({type: LOGIN_FAILURE, payload: err.response})
        })
        
}