import React, { Component } from 'react';
import PlayerItem from './PlayerItem/PlayerItem';
import './player_container.css'

class PlayerContainer extends Component {

  filterByName = ({name}) => {
    const filterText = this.props.filterText.toLowerCase();
    return name.toLowerCase().indexOf(filterText) !== -1;
  }

  render() {
    const players = this.props.players
      .filter(this.filterByName)
      .map(player => {
        return (
          <PlayerItem
            player={player}
            key={player.id}
            onUpdatePlayer={this.props.onUpdatePlayer}
            onDeletePlayer={this.props.onDeletePlayer}/>
        )
      });

    return (
      <div id='player_container'>
        {players}
      </div>
    );
  }
}

export default PlayerContainer;
