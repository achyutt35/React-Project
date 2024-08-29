import React, { Component } from "react";

class SearchBox extends Component {
    render() {
        return (
            <div className="pa2">
                <input
                    className="pa3 ba b--green bg-lightest-blue"
                    type='search'
                    placeholder="search bots"
                    onChange={this.props.searchChange}
                    style={{marginLeft:'550px',width:'400px'}} />
            </div>
        );
    }
}
export default SearchBox;