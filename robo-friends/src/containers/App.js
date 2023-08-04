import React, { Component } from "react";
import CardList from "../components/cardlist";
import SearchBox from "../components/SearchBox";
// import { robots } from "./robots";
import './App.css'
import Scroll from "../components/Scroll";
//creating states

//The App component is a smart component since it has states which describe our app.
//Other components like card or cardlist a pure components.
class App extends Component {
    //First thing in a constructor is to call super
    constructor() {
        super()
        this.state = {
            robots: [], //we will ask for the user from the internet
            searchField: ''
        }
    }
    //writing a function in below syntax, allows us to access state variables.
    onSearchChange = (event) => {
        //state of the search field is value of search box
        this.setState({ searchField: event.target.value });
        // console.log(filteredRobots);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(Response => { //fetch is a part of window object
            return Response.json(); //fetch is a tool to request data from servers
        }).then(users => {
            this.setState({ robots: users });
        }); //fetching robots from a server instead of robots.js

    }
    render() {
        //filtering out the robot name from robots based on the search field.
        //filter function filters out the desired field.
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className="f1">ROBOFRIENDS</h1>
                <SearchBox searchField={searchField} searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>

        );
    }

}
export default App;