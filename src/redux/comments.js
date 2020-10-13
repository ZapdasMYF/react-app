import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionType';

export const Comments = (state = COMMENTS, action) => {
    console.log("-------COMMENTS REDUX--------")
    console.log(action)
    console.log(action.payload)
    console.log("-----------------------------")
    switch (action.type){
        
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return state.concat(comment);
        default:
            return state;
    }
    
};