import React, { Component } from 'react';
import EditForm from './EditForm/EditForm'
import './player_item.css';

function PlayerProperty(props){
  return (
    <li className="player_property">
      <p className="prop_name">{props.name}:</p>
      <p className="prop_info">{props.info}</p>
    </li>
  );
}

function DefaultView(props){
  return(
    <div className='player_item'
         onMouseEnter={props.onMouseEnter}
         onMouseLeave={props.onMouseLeave}>

        <ul className='player_property_list'>

          <PlayerProperty
            name='Name'
            info={props.player.name}
          />
          <PlayerProperty
            name='age'
            info={props.player.age}
          />
          <PlayerProperty
            name='nationality'
            info={props.player.nationality}
          />
          <PlayerProperty
            name='club'
            info={props.player.club}
          />
        </ul>
        {props.children}
    </div>
  );
}

function HoverView(props) {
  return (
      <DefaultView onMouseEnter={props.onMouseEnter}
                   onMouseLeave={props.onMouseLeave}
                   player={props.player}>
        <button className='edit_button'
                onClick={props.onEditClick}>
          Edit
        </button>

        <button className='delete_button'
                onClick={props.onDeleteClick}>
          Delete
        </button>
      </DefaultView>
  );
}

function EditView(props){
  return (
    <EditForm player={props.player}
              onDefaultView={props.onDefaultView}
              onUpdatePlayer={props.onUpdatePlayer}
    />
  );
}

class PlayerItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      editing: false
    }
  }

  mouseEnter = () => {
      this.setState({isHovering: true})
  }

  mouseLeave = () => {
      this.setState({isHovering: false})
  }

  handleEditClick = () => {
    this.setState({
      editing: true
    })
  }

  handleDefaultView = () => {
    this.setState({
      isHovering: false,
      editing: false
    })
  }

  handleDeleteClick = () => {
    const player = this.props.player;
    this.props.onDeletePlayer(player.id);
  }

  render() {

    if (this.state.editing) {
      return (
        <EditView
          player={this.props.player}
          onDefaultView={this.handleDefaultView}
          onUpdatePlayer={this.props.onUpdatePlayer}
        />
      );
    }else if (this.state.isHovering && !this.state.editing) {
      return (
        <HoverView
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
          onEditClick={this.handleEditClick}
          onDeleteClick={this.handleDeleteClick}
          player={this.props.player}
        />
      );
    }
    else {
      return (
        <DefaultView
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
          player={this.props.player}
        />
      );
    }
  }
}

export default PlayerItem;
