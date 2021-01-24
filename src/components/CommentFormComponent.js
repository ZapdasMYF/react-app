import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody,Label,Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state={
            isComment: false,
        }
        this.toggleCommentForm = this.toggleCommentForm.bind(this);
        console.log('CommentForm')
    }
    toggleCommentForm() {
        this.setState({
            isComment: !this.state.isComment
        });
    }
    handleCommentSubmit(values){
        console.log(this.props)
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
        console.log('Current State is: ' + JSON.stringify(values));
        //alert('Current State is: ' + JSON.stringify(values));
        this.toggleCommentForm() /**for simple remove this line */
    }
    render(){
        return(
            <div>
                <Button outline onClick={this.toggleCommentForm}>Comment</Button>
                            
                            
                <Modal isOpen={this.state.isComment} toggle={this.toggleCommentForm}>
                    <ModalHeader toggle={this.toggleCommentForm}>Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleCommentSubmit(values)}> {/**for simple => onSubmit={this.handleCommentSubmit} */}
                            <Row className="form-group">
                                <Label>Name</Label>
                                <Control.text model=".name" type="text" id="name" name="name"
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                    />
                                <Errors
                                    className="text-danger"
                                    model=".name"
                                    show="touched"
                                    messages={{
                                        required: 'Required, ',
                                        minLength: 'Must be greater than 3 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </Row>

                            <Row className="form-group">
                                <Label>Rating</Label>
                                <Control.select  model=".rating"  id="rating" name="rating" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Row>
                            <Row className="form-group">
                                <Label>Comment</Label>
                                <Control.textarea model='.comment' id="comment" name="comment"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(10), maxLength: maxLength(50)
                                }}
                                >
                                </Control.textarea>
                                <Errors
                                    className="text-danger"
                                    model=".comment"
                                    show="touched"
                                    messages={{
                                        required: 'Required, ',
                                        minLength: 'Must be greater than 10 characters',
                                        maxLength: 'Must be 50 characters or less'
                                    }}
                                />
                            </Row>
                            <br/>
                            <Row className="form-group">
                            <   Button className="form-control" type="submit" value="submit" color="primary" >Comment </Button>
                            </Row>
                            
                        </LocalForm>
                    </ModalBody>
                </Modal>
                
            </div>
        );
    }

}
export default CommentForm;