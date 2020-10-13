//import { DISHES } from '../shared/dishes';
import * as ActionType from './ActionType';


export const Dishes = (state = {
        isLoading : true,
        errMsg : null,
        dishes : [] }, action ) => {

    switch (action.type){
        case ActionType.ADD_DISHES:
            console.log('===============addDishes================')
            console.log('===============addDishes================')
            console.log('================addDishes===============')
            console.log('================addDishes===============')
            console.log('=================addDishes==============')
            return {...state, isLoading:false, errMsg:null, dishes:action.payload }

        case ActionType.DISHES_LOADING:
            console.log('===============LOAD================')
            console.log('===============LOAD================')
            console.log('===============LOAD================')
            console.log('===============LOAD================')
            return {...state, isLoading:true, errMsg:null, dishes:[] }

        case ActionType.DISHES_FAILED:
            console.log('===============Failed================')
            console.log('===============Failed================')
            console.log('===============Failed================')
            console.log('===============Failed================')
            return {...state, isLoading:false, errMsg:action.payload }
        
        default:
            return state;
    }
    
};
