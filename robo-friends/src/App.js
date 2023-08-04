import React, { Component } from "react";
import CardList from "./cardlist";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import './App.css'
//creating states

class App extends Component {
    //First thing in a constructor is to call super
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }
    }
    //writing a function in below syntax, allows us to access state variables.
    onSearchChange = (event) =>{
        //state of the search field is value of search box
        this.setState({searchField: event.target.value});
        // console.log(filteredRobots);
    }

    render() {
        //filtering out the robot name from robots based on the search field.
        //filter function filters out the desired field.
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className="f1">ROBOFRIENDS</h1>
                <SearchBox searchField={this.state.searchField} searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots} />

            </div>

        );
    }

}
export default App;