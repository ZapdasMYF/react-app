import * as ActionType from './ActionType';
import { DISHES } from '../shared/dishes';
import  { baseUrl }  from '../shared/baseurl'

//              Dishes

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
    })

    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () => ({
    type: ActionType.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionType.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionType.ADD_DISHES,
    payload: dishes
});


//              Comments

export const addComment = (comment) => ({
    type: ActionType.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();
    
    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};

export const fetchComments = () => (dispatch) => {

    dispatch(loadingComment(true));

    return fetch(baseUrl + 'comments')

    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
    })

    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(failedComment(error.message)));
}


export const loadingComment = () =>({
    type: ActionType.LOADING_COMMENTS,
});

export const failedComment = (errmess) =>({
    type: ActionType.FAILED_COMMENTS,
    payload: errmess
});

export const addComments = (comments) =>({
    type: ActionType.ADD_COMMENTS,
    payload: comments
});


//              Promos


export const fetchPromos = () => (dispatch) => {

    dispatch(loadingPromo(true));

    return fetch(baseUrl + 'promotions')

    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
    })

    .then(response => response.json())
    .then(promotions => dispatch(addPromos(promotions)))
    .catch(error => dispatch(failedPromo(error.message)));
}



export const addPromos = (promotions) =>({
    type: ActionType.ADD_PROMO,
    payload:promotions
});


export const loadingPromo = () =>({
    type: ActionType.LOADING_PROMO,
});


export const failedPromo = (errmess) =>({
    type: ActionType.FAILED_PROMO,
    payload:errmess
});
