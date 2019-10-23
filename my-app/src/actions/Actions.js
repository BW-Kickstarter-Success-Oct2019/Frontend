import {axiosWithAuth} from "../utils/axiosWithAuth";

export const START_SIGNUP = "START_SIGNUP";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const PostSignUp = (form,props) => dispatch => {
    dispatch({type:START_SIGNUP});
        axiosWithAuth()
        .post("/user/register", form)
        .then(res =>{
            console.log("signup post res", res)
            props.history.push("/login")
            dispatch({type: SIGNUP_SUCCESS})
            
        })
        .catch(err =>{
            dispatch({type: SIGNUP_FAILURE, payload: err.response})
        })
        
}



export const START_LOGIN = "START_LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const PostLogin = (form,props) => dispatch => {
    console.log("props in login action",props)
    dispatch({type:START_LOGIN});
        axiosWithAuth()
        .post("/user/login",form)
        .then(res =>{
            console.log("login post res",res)
            localStorage.setItem("token", res.data.token )
            props.history.push("/dashboard")
            dispatch({type:LOGIN_SUCCESS})
        })
        .catch(err =>{
            dispatch({type: LOGIN_FAILURE, payload: err.response})
        })
        
}

export const START_CAMPAIGN = "START_CAMPAIGN";
export const CAMPAIGN_SUCCESS = "CAMPAIGN_SUCCESS";
export const CAMPAIGN_FAILURE = "CAMPAIGN_FAILURE";

export const PostCampaign = (form,props) => dispatch => {
    dispatch({type:START_CAMPAIGN});
        axiosWithAuth()
        .post("/restricted/campaigns",form)
        .then(res =>{
            console.log("login post res",res)
            props.history.push("/dashboard")
            dispatch({type:CAMPAIGN_SUCCESS, payload:res})
        })
        .catch(err =>{
            dispatch({type: CAMPAIGN_FAILURE, payload: err.response})
        })
        
}

// export const UPDATE_CAMPAIGN = "UPDATE_CAMPAIGN";
// export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
// export const UPDATE_FAILURE = "UPDATE_FAILURE";

// export const UpdateCampaign = (form,props) => dispatch => {
//     dispatch({type:UPDATE_CAMPAIGN});
//         axiosWithAuth()
//         .post(`/restricted/campaigns/${}`,form)
//         .then(res =>{
//             console.log("Update Campaign res",res)
//             props.history.push("/dashboard")
//             dispatch({type:CAMPAIGN_SUCCESS})
//         })
//         .catch(err =>{
//             dispatch({type: CAMPAIGN_FAILURE, payload: err.response})
//         })
// }