import {axiosWithAuth} from "../utils/axiosWithAuth";
import history from '../components/history';

export const GET_CAMPAIGN = "GET_CAMPAIGN";
export const CAMPAIGN_SUCCESS = "CAMPAIGN_SUCCESS";
export const CAMPAIGN_FAILURE = "CAMPAIGN_FAILURE";
export const GetCampaign = () => dispatch => {
    dispatch({type:GET_CAMPAIGN});
        axiosWithAuth()
        .get("/restricted/campaigns")
        .then(res =>{
            dispatch({type: CAMPAIGN_SUCCESS, payload:res.data})
            console.log("get res", res);
            // setCampaigns(res.data);
            
        })
        .catch(err =>{
            dispatch({type: CAMPAIGN_FAILURE, payload: err.response})
        })
        
}


export const GET_USER = "GET_USER";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_FAILURE = "USER_FAILURE";
export const GetUser = () => dispatch => {
    dispatch({type:GET_USER});
        axiosWithAuth()
        .get("/user/restricted")
        .then(res =>{
            dispatch({type: USER_SUCCESS, payload:res.data})
            console.log("get user res", res);
            
            
        })
        .catch(err =>{
            dispatch({type: USER_FAILURE, payload: err.response})
        })
        
}




export const START_SIGNUP = "START_SIGNUP";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const PostSignUp = (form) => dispatch => {
    dispatch({type:START_SIGNUP});
        axiosWithAuth()
        .post("/user/register", form)
        .then(res =>{
            dispatch({type: SIGNUP_SUCCESS})
            console.log("signup post res", res)
            history.push("/")
            
            
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
            dispatch({type:LOGIN_SUCCESS})
            console.log("login post res",res)
            localStorage.setItem("token", res.data.token )
            history.push("/dashboard")
            
        })
        .catch(err =>{
            dispatch({type: LOGIN_FAILURE, payload: err.response})
        })
        
}

export const POST_CAMPAIGN = "POST_CAMPAIGN";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

export const PostCampaign = (form) => dispatch => {
    dispatch({type:POST_CAMPAIGN});
        axiosWithAuth()
        .post(`/restricted/campaigns`,form)
        .then(res =>{
            dispatch({type:POST_SUCCESS, payload:res.data})
            console.log("post campaign  res",res)
            history.push("/dashboard")
            
        })
        .catch(err =>{
            dispatch({type: POST_FAILURE, payload: err.response})
        })
        
}

export const UPDATE_CAMPAIGN = "UPDATE_CAMPAIGN";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_FAILURE = "UPDATE_FAILURE";

export const UpdateCampaign = (form, id, redirect) => dispatch => {
    console.log("UPCPM ID", id)
    dispatch({type:UPDATE_CAMPAIGN});
        axiosWithAuth()
        .put(`/restricted/campaigns/${id}`,form)
        .then(res =>{
            dispatch({type:UPDATE_SUCCESS, payload:res.data})
            console.log("Update Campaign res",res.data)
            redirect();
            
        })
        .catch(err =>{
            dispatch({type: UPDATE_FAILURE, payload: err.response})
        })
}


export const DELETE_CAMPAIGN = "DELETE_CAMPAIGN";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";

export const DeleteCampaign = (id) => dispatch => {
    console.log("delete id",id)
    dispatch({type:DELETE_CAMPAIGN});
        axiosWithAuth()
        .delete(`/restricted/campaigns/${id}`)
        .then(res =>{
            dispatch({type:DELETE_SUCCESS, payload:res.data})
            console.log("delete Campaign res",res)
            
            
        })
        .catch(err =>{
            dispatch({type: DELETE_FAILURE, payload: err.response})
        })
}