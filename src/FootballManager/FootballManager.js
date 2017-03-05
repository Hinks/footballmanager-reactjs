import React, { Component } from 'react';
import Header from './Header/Header';
import PlayerContainer from './PlayerContainer/PlayerContainer';
import SideBar from './SideBar/SideBar'

class FootballManager extends Component {
  constructor(props){
    super(props)
    this.state = {
      filterText: '',
      id: 5,
      players: [
        {id: 1, name: "Wayne Rooney", age: 31, nationality: "Eng", club: "Man Utd"},
        {id: 2, name: "Zlatan Ibrahimovic", age: 35, nationality: "Swe", club: "Man Utd"},
        {id: 3, name: "Joe Hart", age: 29, nationality: "Eng", club: "Torino"},
        {id: 4, name: "Robert Huth", age: 32, nationality: "Ger", club: "Leicester City"}
      ]
    };
  }

  handleSearchInput = (filterText) => {
    this.setState({
      filterText: filterText
    });
  }

  handleUpdatePlayer = (playerId, newPlayer) => {
    const newPlayers = this.state.players.slice();
    const index = newPlayers.findIndex(player => player.id === playerId);
    newPlayers[index] = newPlayer
    this.setState({
      players: newPlayers
    })
  }

  handleDeletePlayer = (playerId) => {
    const players = this.state.players.slice();
    const index = players.findIndex(player => player.id === playerId);
    players.splice(index, 1);//mutates players by removing the item from the list.
    this.setState({
      players: players
    })
  }

  handleAddPlayer = (newPlayer) => {
    const players = this.state.players.slice();
    const id = this.state.id;
    const player = Object.assign({id: id}, newPlayer);
    players.push(player);

    this.setState({
      id: id + 1,
      players: players
    })
  }

  render() {
    return (
      <div>
        <Header />
        <SideBar
          filterText={this.state.filterText}
          onSearchInput={this.handleSearchInput}
          onAddPlayer={this.handleAddPlayer}
        />
        <PlayerContainer
          players={this.state.players}
          filterText={this.state.filterText}
          onUpdatePlayer={this.handleUpdatePlayer}
          onDeletePlayer={this.handleDeletePlayer}
          onAddPlayer={this.handleAddPlayer}
          />
      </div>
    );
  }
}

export default FootballManager;
