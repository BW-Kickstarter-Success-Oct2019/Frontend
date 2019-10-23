
import { START_SIGNUP,SIGNUP_SUCCESS,SIGNUP_FAILURE,START_LOGIN,LOGIN_SUCCESS,LOGIN_FAILURE,START_CAMPAIGN,CAMPAIGN_SUCCESS,CAMPAIGN_FAILURE } from "../actions";

    const initialState = {
        isPosting: false,
        campaign: [],
        error:"",

    };

    export const Reducer = (state = initialState, action) => {
        switch(action.type) {
            case START_SIGNUP:
                return{
                    isPosting:true,
                }
            case SIGNUP_SUCCESS:
                return{
                    isPosting:false,
                }
            case SIGNUP_FAILURE:
                return{
                    isPosting:false,
                }
            case START_LOGIN:
                return{
                    isPosting:true,
                }
            case LOGIN_SUCCESS:
                return{
                    isPosting:false,
                }
            case LOGIN_FAILURE:
                return{
                    isPosting:false,
                }
            case START_CAMPAIGN:
                return{
                    isPosting:true,
                }
            case CAMPAIGN_SUCCESS:
                return{
                    isPosting:false,
                }
            case CAMPAIGN_FAILURE:
                    return{
                        isPosting:false,
                }
            default:
                return state
        }
    }