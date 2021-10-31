import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import user from './user';
import post from './post';

//async action creator

// action creator
const changeNickname = (data) => {
    return {
        type : 'CHANGE_NICKNAME',
        data,
    }
};

const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch(action.type){
            case HYDRATE:
                return {
                    ...state, ...action.payload
                }
            default:
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;