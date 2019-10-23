
import { START_SIGNUP,SIGNUP_SUCCESS,SIGNUP_FAILURE,START_LOGIN,LOGIN_SUCCESS,LOGIN_FAILURE,POST_CAMPAIGN,CAMPAIGN_SUCCESS,CAMPAIGN_FAILURE } from "../actions";

    const initialState = {
        isPosting: false,
        campaign: [],
        error:"",

    };

    export const Reducer = (state = initialState, action) => {
        switch(action.type) {
            case START_SIGNUP:
                return{
                    ...state,
                    isPosting:true,
                }
            case SIGNUP_SUCCESS:
                return{
                    ...state,
                    isPosting:false,
                }
            case SIGNUP_FAILURE:
                return{
                    ...state,
                    isPosting:false,
                    error: action.payload
                }
            case START_LOGIN:
                return{
                    ...state,
                    isPosting:true,
                }
            case LOGIN_SUCCESS:
                return{
                    ...state,
                    isPosting:false,
                }
            case LOGIN_FAILURE:
                return{
                    ...state,
                    isPosting:false,
                    error: action.payload
                }
            case POST_CAMPAIGN:
                return{
                    ...state,
                    isPosting:true,
                }
            case CAMPAIGN_SUCCESS:
                return{
                    ...state,
                    isPosting:false,
                    campaign: [...state.campaign, action.payload]
                }
            case CAMPAIGN_FAILURE:
                    return{
                        ...state,
                        isPosting:false,
                        error: action.payload
                }
            default:
                return state
        }
    }