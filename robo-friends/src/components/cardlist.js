import React, { Component } from "react";
import Card from "./card";

class CardList extends Component {
    render() {
        const robot = this.props.robots;
        const cardComponent = robot.map((username, i) => {
            return (
                <Card
                    key={i}
                    id={robot[i].id}
                    name={robot[i].name}
                    email={robot[i].email} 
                />
            );
        });
        return (
            <div>
                {cardComponent}
            </div>
        )
    }
}
export default CardList;