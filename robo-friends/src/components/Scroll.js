import React, { Component } from "react";

class Scroll extends Component {
    render() {
        console.log(this.props);
        return (
            <div style={{overflowY:'scroll', height: '500px', width:'500px', marginLeft:'500px' }}>
                {this.props.children}
            </div>
        );
    }
}
export default Scroll;