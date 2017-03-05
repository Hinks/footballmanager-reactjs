import React, { Component } from 'react';
import './edit_form.css';

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.player.name,
      age: this.props.player.age,
      nationality: this.props.player.nationality,
      club: this.props.player.club
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  }

  handleSubmit = (event) => {
    const newPlayer = {
      id: this.props.player.id,
      name: this.state.name,
      age: this.state.age,
      nationality: this.state.nationality,
      club: this.state.club
    }
    this.props.onUpdatePlayer(this.props.player.id, newPlayer);
    this.props.onDefaultView();
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}
            className='edit_form'>
        <input name="name"
               type="text"
               value={this.state.name}
               onChange={this.handleInputChange} /> <br></br>
        <input name="age"
               type="text"
               value={this.state.age}
               onChange={this.handleInputChange} /> <br></br>
        <input name="nationality"
               type="text"
               value={this.state.nationality}
               onChange={this.handleInputChange} /> <br></br>
        <input name="club"
               type="text"
               value={this.state.club}
               onChange={this.handleInputChange} /> <br></br>

        <input type="submit"
               className="save_button"
               value="Save"/>
        <button
          className="cancel_button"
          onClick={this.props.onDefaultView}>
          Cancel
        </button>

      </form>
    );
  }
}

export default EditForm;
