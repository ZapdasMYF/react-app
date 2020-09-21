import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { LEADERS } from '../shared/leaders';


class LeaderDetail extends Component{

    constructor(props){
        super(props);
    }

    render(){
        
        const leader = this.props.leader
        return(
            <div className='container'>
                <br></br>
                <img src={leader.image} />
                <h4>{leader.name}</h4>
                <h5>{leader.designation}</h5>
                <p>{leader.description}</p>
                <br></br>
            </div>
        );
    }
}
export default LeaderDetail;