import {axiosWithAuth} from "../utils/axiosWithAuth";
import history from '../components/history';

export const START_SIGNUP = "START_SIGNUP";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const PostSignUp = (form) => dispatch => {
    dispatch({type:START_SIGNUP});
        axiosWithAuth()
        .post("/user/register", form)
        .then(res =>{
            console.log("signup post res", res)
            History.push("/")
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
        .post("/user/login",form)
        .then(res =>{
            console.log("login post res",res)
            localStorage.setItem("token", res.data.token )
            history.push("/dashboard")
            dispatch({type:LOGIN_SUCCESS})
        })
        .catch(err =>{
            dispatch({type: LOGIN_FAILURE, payload: err.response})
        })
        
}

export const POST_CAMPAIGN = "POST_CAMPAIGN";
export const CAMPAIGN_SUCCESS = "CAMPAIGN_SUCCESS";
export const CAMPAIGN_FAILURE = "CAMPAIGN_FAILURE";

export const PostCampaign = (form) => dispatch => {
    dispatch({type:POST_CAMPAIGN});
        axiosWithAuth()
        .post(`/restricted/campaigns`,form)
        .then(res =>{
            console.log("post campaign post res",res)
            history.push("/dashboard")
            dispatch({type:CAMPAIGN_SUCCESS, payload:res})
        })
        .catch(err =>{
            dispatch({type: CAMPAIGN_FAILURE, payload: err.response})
        })
        
}

export const UPDATE_CAMPAIGN = "UPDATE_CAMPAIGN";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_FAILURE = "UPDATE_FAILURE";

// export const UpdateCampaign = (form) => dispatch => {
//     dispatch({type:UPDATE_CAMPAIGN});
//         axiosWithAuth()
//         .post(`/restricted/campaigns/${}`,form)
//         .then(res =>{
//             console.log("Update Campaign res",res)
//             history.push("/dashboard")
//             dispatch({type:CAMPAIGN_SUCCESS})
//         })
//         .catch(err =>{
//             dispatch({type: CAMPAIGN_FAILURE, payload: err.response})
//         })
// }


export const DELETE_CAMPAIGN = "DELETE_CAMPAIGN";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";

// export const DeleteCampaign = (form) => dispatch => {
//     dispatch({type:DELETE_CAMPAIGN});
//         axiosWithAuth()
//         .post(`/restricted/campaigns/${}`,form)
//         .then(res =>{
//             console.log("delete Campaign res",res)
//             history.push("/dashboard")
//             dispatch({type:DELETE_SUCCESS})
//         })
//         .catch(err =>{
//             dispatch({type: DELETE_FAILURE, payload: err.response})
//         })
// }