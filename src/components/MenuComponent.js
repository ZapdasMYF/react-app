import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent'
import { baseUrl } from '../shared/baseurl'
// react life cycle 
// 1 - constructor()
// 2 - getDerivedStateFromProps()
// 3 - render()
// 4 -componentDidMount()

class Menu extends Component {
    constructor(props) {
        super(props);
        console.log('Menu constructor invoke')
    }
    
    componentDidMount(){
      console.log('Menu componentDidMount invoke')
    }
    // Doing same thing in DishDetail Component using props
    /**renderDish(dish) {
      if (dish != null)
          return(
              <Card>
                  <CardImg top src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
          );
      else
          return(
              <div></div>
          );
    }
     */

    renderMenu(dishes,isLoading,errMsg){

      console.log("renderMenu fuction in MenuComponent")
      console.log(dishes,isLoading,errMsg)
      console.log("=================================")
      if (isLoading) {
        return(
                <Loading />
        );
      }
      else if (errMsg) {
          return(
              <h4>{errMsg}</h4>
          );
      }
      else{
      const menu = dishes.map( (dish) => {
        return (
        <div  className="col-12 col-md-5 m-1">
          <Card> {/*2-  key={dish.id} onClick={() => this.props.onClick(dish.id)}    */}  {/*1- onClick={() => this.onDishSelect(dish)}*/}
          <Link to={`/menu/${dish.id}/`} >
            <CardImg width="100%" src={ baseUrl + dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Link>
          </Card>
        </div>
      );
  });

  return(
    <div className='row'>
    {menu}
    </div>
  );
}
    }

    render() {
        // Simple map function
        //
        //  let arr = [1, 2, 3, 4, 5];
        //  let doubled = arr.map(num => {
        //        return num * 2;
        //    });
        //  doubled = [2, 4, 6, 8, 10]
        
        console.log('Menu render invoke')
        console.log(this.props)
        return (
          <div className="container">
              {this.renderMenu(this.props.dishes,this.props.dishesLoading,this.props.dishesErrMess)}
          </div>
        );
    }
}
// <DishDetail dishdetail={this.state.dishes} /> line 80 {this.renderDish(this.state.selectedDish)}-->
export default Menu;