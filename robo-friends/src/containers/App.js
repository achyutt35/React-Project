import React, { useState, useEffect } from "react";
import CardList from "../components/cardlist";
import SearchBox from "../components/SearchBox";
// import { robots } from "./robots";
import './App.css'
import Scroll from "../components/Scroll";
//creating states

//The App component is a smart component since it has states which describe our app.
//Other components like card or cardlist a pure components.
function App() {
    //First thing in a constructor is to call super
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [], //we will ask for the user from the internet
    //         searchField: ''
    //     }
    // }
    //implementing hooks
    const [robots, setRobots] = useState([])
    const [searchField, setSearchField] = useState('')
 
    // writing a function in below syntax, allows us to access state variables.
    // onSearchChange = (event) => {
    //     state of the search field is value of search box
    //     this.setState({ searchField: event.target.value });
    //      console.log(filteredRobots);
    // }
    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }

    

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users').then(Response => { //fetch is a part of window object
    //         return Response.json(); //fetch is a tool to request data from servers
    //     }).then(users => {
    //         this.setState({ robots: users });
    //     }); //fetching robots from a server instead of robots.js

    // }
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then(data => setRobots(data))
    },[])
    //adding an empty array so that useEffect does not runs infiinitely
    //filtering out the robot name from robots based on the search field.
        
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
   return !robots.length? 
    <h1>Loading</h1>:(
        <div className='tc'>
            <h1 className="f1">ROBOFRIENDS</h1>
            <SearchBox searchField={searchField} searchChange={onSearchChange} />
            <Scroll>
                <CardList robots={filteredRobots} />
            </Scroll>
        </div>
    );
}
export default App;