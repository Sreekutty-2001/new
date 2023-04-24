import * as type from '../types';


const initialState = {
    user: {},
    loading: false,
    error: null,
};

export default function auth(state = initialState, action) {
    console.log("action", action.type)
    switch (action.type) {
        case type.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case type.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
                loading: false,
                error: null
            };
        case type.LOGIN_FAILED:
            return {
                ...state,
                user: {},
                loading: false,
                error: action.error
            };
        case type.LOGOUT:
            return {
                ...state,
                user: {},
                loading: false,
                error: null
            };
        default:
            return state;
    }
}