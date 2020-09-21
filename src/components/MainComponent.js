import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent'
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import LeaderDetail from './LeaderdetailComponent'

//function App()
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments:COMMENTS,
      leaders:LEADERS,
      promotions:PROMOTIONS
      
    };
    console.log('Main Constructor Invoke')
  }

  componentDidMount(){
    console.log('Main componentDidMount invoke')
  }
  render(){

    console.log('Main Render Invoke')

    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail dishdetail={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    const LeaderWithId = ({match}) => {
      return(
          <LeaderDetail leader={this.state.leaders.filter((leader) => leader.id === parseInt(match.params.leaderId,10))[0]} />
      );
    };


    return (
      
      <div className="App">
        <Header />
        <Switch>
          
          <Route path='/home' component={() => <Home
                dish={this.state.dishes.filter((dish) => dish.featured )[0] } 
                promotion={this.state.promotions.filter((promo) => promo.featured )[0]}
                leader={this.state.leaders.filter((leader) => leader.featured )[0] }
          /> } /> {/*  {HomePage} */}

          <Route exact path='/aboutus' component={() => <About leaders={this.state.leaders} />} />
          <Route path path='/leader/:leaderId/' component={LeaderWithId} />
          
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
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

export default Main;


//Route path='/home' component={() => <Home
//  dish={this.state.dish.filter((dish) => dish.featured )[0] } 
//  promotion={this.state.promotions.filter((promo) => promo.featured )[0]}
//  leader={this.state.promotions.filter((leader) => leader.featured )[0] }
///> } /> {/*  {HomePage} */}