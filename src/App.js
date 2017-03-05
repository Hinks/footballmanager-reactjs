import React, { Component } from 'react';
import './App.css';
import FootballManager from './FootballManager/FootballManager';

/*let PLAYERS = [
  {id: 1, name: "Wayne Rooney", age: 31, nationality: "Eng", club: "Man Utd"},
  {id: 2, name: "Zlatan Ibrahimovic", age: 34, nationality: "Swe", club: "Man Utd"},
  {id: 3, name: "Joe Hart", age: 30, nationality: "Eng", club: "Torino"},
  {id: 4, name: "Robert Huth", age: 32, nationality: "Ger", club: "Leicester City"}
];*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <FootballManager />
      </div>
    );
  }
}

export default App;
