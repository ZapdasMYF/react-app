//import { PROMOTIONS } from '../shared/promotions';
import * as ActionType from './ActionType';


export const Promotions = (state = {
    isLoading:true,
    errMsg:null,
    promotions:[]
}, action) => {
    switch (action.type){
        case ActionType.ADD_PROMO:
            return {...state,isLoading:false,errMsg:null,promotions:action.payload }
        case ActionType.LOADING_PROMO:
            return {...state,isLoading:true,errMsg:null,promotions:[] }
        case ActionType.FAILED_PROMO:
            return {...state,isLoading:false,errMsg:action.payload }
        default:
            return state;
    }
    
};