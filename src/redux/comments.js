//import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionType';

export const Comments = (state = {
    isLoading : true,
    errMsg : null,
    comments : []
    }, action) => {
    switch (action.type){
        
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            //comment.id = state.comment.length;
            //comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            //return state.concat(comment);
            return {...state,comments:state.comments.concat(comment)}
            
        case ActionTypes.ADD_COMMENTS:
            return {...state,isLoading:false,errMsg:null,comments:action.payload}
        case ActionTypes.LOADING_COMMENTS:
            return {...state,isLoading:true,errMsg:null}
        case ActionTypes.FAILED_COMMENTS:
            return {...state,isLoading:false,errMsg:action.payload}
        default:
            return state;
    }
    
};