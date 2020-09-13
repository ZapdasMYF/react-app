import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
        console.log("DISHDETAIL CONSTRUCTOR Invoke")
    }


    renderComments(comments) {
        console.log('dishdetail comment')
        const com = comments.map( (comment) => {
            return(
                <div className='comment-main-div'>
                    <p>id : {comment.id}</p>
                    <p>rating : {comment.rating}</p>
                    <p>{comment.comment}</p>
                    <p>Date : {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </div>
            );
        })
        
        return(
            <div className="row m-1">
              {com}
            </div>
        );
      }

      componentDidMount(){
        console.log('DishDetail componentDidMount invoke')
      }

    render(){
        console.log("DISHDETAIL RENDER INVOKE")
        const dishdetail = this.props.dishdetail
        if (dishdetail != null) {
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top src={dishdetail.image} alt={dishdetail.name} />
                                <CardBody>
                                    <CardTitle>{dishdetail.name}</CardTitle>
                                    <CardText>{dishdetail.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            {this.renderComments(dishdetail.comments)}
                            
                        </div>
                    </div>
                </div>
                
            );
        }
        else{
            return(<div></div>);
        }
    }
}

export default DishDetail;