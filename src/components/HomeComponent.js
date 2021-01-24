import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseurl';

class Home extends Component{
    
    renderItems(item,isLoading,errMsg){
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
            return(
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
    }


    render(){
        const dish = this.props.dish;
        const leader = this.props.leader;
        const promo = this.props.promotion;
        const isLoading = this.props.dishesLoading
        const errmsg = this.props.dishesErrMess
       
        return(

        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    {this.renderItems(dish,isLoading,errmsg)}
                </div>
                <div className="col-12 col-md m-1">
                    {this.renderItems(leader)}
                </div>
                <div className="col-12 col-md m-1">
                    {this.renderItems(promo,this.props.promotionLoading,this.props.promotionFailed)}
                </div>
            </div>
        </div>


        );
    }
}

export default Home;