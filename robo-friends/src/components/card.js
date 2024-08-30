import React, { Component } from "react";
// import { robots } from "./robots";

class Card extends Component {
    render() {
        const { name, email, id } = this.props;
        
        return (

            <div className='tc bg-white br3 pa3 ma2 dib bw1 grow'>
                
                <div className='tc'>
                    <img alt='robots' src={`https://robohash.org/${id}?10x10`} />
                    <h2>    {name}    </h2>
                    <p>     {email}   </p>
                </div>

            </div>
        );

    }
}
export default Card;