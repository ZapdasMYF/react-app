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

import { addComment , fetchDishes} from '../redux/ActionCreator';



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
  addComment: (dishId, rating, author, comment) => dispatch(
    addComment(dishId, rating, author, comment)
  ),
  fetchDishes: () => { dispatch(fetchDishes())}
});




class Main extends Component {

  constructor(props) {
    super(props);
    console.log('Main Constructor Invoke')
  }

  componentDidMount(){
    console.log('Main componentDidMount invoke')
    this.props.fetchDishes();
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
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail dishdetail={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            dishesLoading={this.props.dishes.isLoading}
            dishesErrMess={this.props.dishes.errMsg}
            addComment={this.props.addComment} />
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
                promotion={this.props.promotions.filter((promo) => promo.featured )[0]}
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

          <Route exact path='/contactus' component={() => <Contact />} />
          
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