import {postsActionTypes} from "./actions";

const initialState = {
    posts: [],
    loading: false
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case postsActionTypes.SET_POSTS:
            return {...state, posts: action.payload}
        case postsActionTypes.SET_LOADING:
            return {...state, loading: action.payload}
        case postsActionTypes.CLEAR:
            return {...state, posts: []}

        default:
            return state;
    }
}