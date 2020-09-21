import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';


class Home extends Component{
    
    renderItems(item){
        return(
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
    }


    render(){
        const dish = this.props.dish;
        const leader = this.props.leader;
        const promo = this.props.promotion;
        
        return(

        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    {this.renderItems(dish)}
                </div>
                <div className="col-12 col-md m-1">
                    {this.renderItems(leader)}
                </div>
                <div className="col-12 col-md m-1">
                    {this.renderItems(promo)}
                </div>
            </div>
        </div>


        );
    }
}

export default Home;