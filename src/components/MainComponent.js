import React, { Component } from 'react';

import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

//function App()
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
    console.log('Main Constructor Invoke')
  }

  onDishSelect(dishId) {
    console.log(dishId,"DISH_ID MainComponent")
    this.setState({ selectedDish: dishId});
  }

  componentDidMount(){
    console.log('Main componentDidMount invoke')
  }
  render(){

    console.log('Main Render Invoke')
    return (
      <div className="App">
        <Header />

        {/* up to down ----- onClick ko as a parameter pass kr rhe hain parameter m jo hoga hmausy Menu m props k through access kr lain ge */}
        {/* OR */}
        {/* down to up ----- Menu sy onClick k data idr aya hai*/}
        {/* dishId kaise aye ider */}
        <Menu dishes={this.state.dishes} onClick={(dishId) => 
            this.onDishSelect(dishId)}/>
      
        <DishDetail dishdetail={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0] }/>
        <Footer />
      </div>
    );
  }
}

export default Main;
