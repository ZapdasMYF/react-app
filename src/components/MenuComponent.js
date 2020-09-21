import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';


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

    renderMenu(dishes){

      console.log("renderMenu fuction in MenuComponent")

      const menu = dishes.map( (dish) => {
        return (
        <div  className="col-12 col-md-5 m-1">
          <Card> {/*2-  key={dish.id} onClick={() => this.props.onClick(dish.id)}    */}  {/*1- onClick={() => this.onDishSelect(dish)}*/}
          <Link to={`/menu/${dish.id}/`} >
            <CardImg width="100%" src={dish.image} alt={dish.name} />
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

    render() {
        // Simple map function
        //
        //  let arr = [1, 2, 3, 4, 5];
        //  let doubled = arr.map(num => {
        //        return num * 2;
        //    });
        //  doubled = [2, 4, 6, 8, 10]
        
        console.log('Menu render invoke')
        
        return (
          <div className="container">
              {this.renderMenu(this.props.dishes)}
          </div>
        );
    }
}
// <DishDetail dishdetail={this.state.dishes} /> line 80 {this.renderDish(this.state.selectedDish)}-->
export default Menu;