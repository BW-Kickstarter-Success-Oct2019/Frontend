
import { START_SIGNUP,SIGNUP_SUCCESS,SIGNUP_FAILURE,START_LOGIN,LOGIN_SUCCESS,LOGIN_FAILURE } from "../actions";

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
            default:
                return state
        }
    }