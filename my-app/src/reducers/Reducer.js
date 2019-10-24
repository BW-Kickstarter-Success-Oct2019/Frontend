
import {GET_CAMPAIGN, CAMPAIGN_SUCCESS, CAMPAIGN_FAILURE, START_SIGNUP,SIGNUP_SUCCESS,SIGNUP_FAILURE,START_LOGIN,LOGIN_SUCCESS,LOGIN_FAILURE,POST_CAMPAIGN,POST_SUCCESS,POST_FAILURE, UPDATE_CAMPAIGN,UPDATE_SUCCESS, UPDATE_FAILURE, DELETE_CAMPAIGN, DELETE_SUCCESS, DELETE_FAILURE } from "../actions";

    const initialState = {
        isPosting: false,
        isUpdating:false,
        isDeleting:false,
        campaign: [],
        error:"",

    };

    export const Reducer = (state = initialState, action) => {
        // console.log("state",state)
        switch(action.type) {
            case UPDATE_CAMPAIGN:
                return{
                    ...state,
                    isUpdating: true,
                }
                case UPDATE_SUCCESS:
                    
                return{
                    ...state,
                    campaign: state.campaign.map(item => {
                        console.log("paload.id",action.payload.id)
                    console.log("item.id", item.id)
                        if(item.id === action.payload.id){
                            return action.payload
                        }else{
                            return  item
                        }
                    }),
                    isUpdating:false
                }
                case UPDATE_FAILURE:
                return{
                    ...state,
                }
            case GET_CAMPAIGN:
                return{
                    ...state,
    
                    error:""
                }
            case CAMPAIGN_SUCCESS:
                return{
                    ...state,
                    campaign: action.payload
                }
            case CAMPAIGN_FAILURE:
                return{
                    ...state,
                    error:action.payload
                }
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
            case POST_SUCCESS:
                return{
                    ...state,
                    isPosting:false,
                    campaign: [...state.campaign, action.payload],
                    error:""
                }
            case POST_FAILURE:
                    return{
                        ...state,
                        isPosting:false,
                        error: action.payload
                }
            case DELETE_CAMPAIGN:
                return{
                    ...state,
                }
                case DELETE_SUCCESS:
                return{
                    ...state,
                    campaign:state.campaign.filter(item => {
                        return action.payload.id !== item.id
                    })
                }
                case DELETE_FAILURE:
                return{
                    ...state,
                    error:action.payload
                }
            default:
                return state
        }
        
    }