import * as type from '../types';

const initialState = {
    users: {},
    loading: false,
};

export default function users(state = initialState, action) {
    console.log("action",action.type)
    switch (action.type) {
        case type.GET_USERS_REQ:
            return {
                ...state,
                loading: true,
            };
        case type.SUCCESS_USERS:
            return {
                ...state,
                users: action.users,
                loading: false
            };
        case type.FAILED_USERS:
            return {
                ...state,
                users: {},
                loading: false
            };
        default:
            return state;
    }

}