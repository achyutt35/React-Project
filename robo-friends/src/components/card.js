import React, { Component } from "react";
// import { robots } from "./robots";

class Card extends Component {
    render() {
        const { name, email, id } = this.props;
        
        return (

            <div className="tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5">
                <img alt='robots' src={`https://robohash.org/${id}?10x10`} />
                <div>
                    <h2>{name} </h2>
                    <p> {email}</p>
                </div>

            </div>
        );

    }
}
export default Card;