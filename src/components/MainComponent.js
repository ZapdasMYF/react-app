import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent'
//import { DISHES } from '../shared/dishes';
//import { PROMOTIONS } from '../shared/promotions';
//import { COMMENTS } from '../shared/comments';
//import { LEADERS } from '../shared/leaders';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import LeaderDetail from './LeaderdetailComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import { postComment , fetchDishes ,fetchComments , fetchPromos , postFeedback} from '../redux/ActionCreator';
import { actions } from 'react-redux-form';


// yeh kya kr rha hai ? data state sy remove kr k props k through pass kr rhe hain ab why?
//
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}


const mapDispatchToProps = dispatch => ({
  postComment: (dishId, rating, author, comment) => dispatch(
    postComment(dishId, rating, author, comment)
  ),
  fetchComments: () => { dispatch(fetchComments())},
  fetchDishes: () => { dispatch(fetchDishes())},
  fetchPromos: () => { dispatch(fetchPromos())},
  postFeedback: (feedback) => dispatch(postFeedback(feedback)),
  resetFeedbackForm : () => {dispatch( actions.reset('feedback') )}
});




class Main extends Component {

  constructor(props) {
    super(props);
    console.log('Main Constructor Invoke')
  }

  componentDidMount(){
    console.log('Main componentDidMount invoke')
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }
  
  render(){

    console.log('Main Render Invoke')
    console.log("PROPS")
    console.log(this.props);
    const HomePage = () => {
      
      return(
          
          <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMsg}
              promotion={this.props.promos.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail dishdetail={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            commentsErrMess={this.props.comments.errMsg}
            dishesLoading={this.props.dishes.isLoading}
            dishesErrMess={this.props.dishes.errMsg}
            postComment={this.props.postComment} />
      );
    };

    const LeaderWithId = ({match}) => {
      return(
          <LeaderDetail leader={this.props.leaders.filter((leader) => leader.id === parseInt(match.params.leaderId,10))[0]} />
      );
    };


    return (
      
      <div className="App">
        <Header />
        <Switch>
          
          <Route path='/home' component={() => <Home
                dish={this.props.dishes.dishes.filter((dish) => dish.featured )[0] } 
                dishesLoading={this.props.dishes.isLoading}
                dishesErrMess={this.props.dishes.errMsg}
                promotion={this.props.promotions.promotions.filter((promo) => promo.featured )[0]}
                promotionLoading={this.props.promotions.isLoading }
                promotionFailed={this.props.promotions.errMsg }
                leader={this.props.leaders.filter((leader) => leader.featured )[0] }
          /> } /> {/*  {HomePage} */}

          <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
          <Route path='/leader/:leaderId/' component={LeaderWithId} />
          
          <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes.dishes} dishesLoading={this.props.dishes.isLoading} dishesErrMess={this.props.dishes.errMsg} />} />
          <Route path='/menu/:dishId/' component={DishWithId} />
          {/*<Route path='/menu/:dishId/' component={() => <DishDetail
              dishdetail={this.state.dishes.filter((dish) => dish.id === 1 )[0]}
          />} />
          */}

          <Route exact path='/contactus' component={() => <Contact 
                                                          resetFeedbackForm = {this.props.resetFeedbackForm}
                                                          postFeedback={this.props.postFeedback} />} />
          
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
























//Route path='/home' component={() => <Home
//  dish={this.state.dish.filter((dish) => dish.featured )[0] } 
//  promotion={this.state.promotions.filter((promo) => promo.featured )[0]}
//  leader={this.state.promotions.filter((leader) => leader.featured )[0] }
///> } /> {/*  {HomePage} */}