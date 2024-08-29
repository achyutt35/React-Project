import React, { Component } from "react";
// import { robots } from "./robots";

class Card extends Component {
    render() {
        const { name, email, id } = this.props;
        
        return (

            <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
                
                <div className='ts' style={{marginLeft:'100px'}}>
                    <img alt='robots' src={`https://robohash.org/${id}?10x10`} />
                    <h2>    {name}    </h2>
                    <p>     {email}   </p>
                </div>

            </div>
        );

    }
}
export default Card;