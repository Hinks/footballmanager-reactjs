import React, { Component } from 'react';
import './add_form.css';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      nationality: '',
      club: ''
    };
  }

  clearFields = () => {
    this.setState({
      name: '',
      age: '',
      nationality: '',
      club: ''
    })
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
      name: this.state.name,
      age: this.state.age,
      nationality: this.state.nationality,
      club: this.state.club
    }
    this.props.onAddPlayer(newPlayer);
    this.clearFields();
    event.preventDefault();
  }

  render() {


    return (
      <form onSubmit={this.handleSubmit}
            id="add_form">
        <h3>Feel free to add players</h3>
        <label htmlFor="player_name">Full Name</label>
        <input name="name"
               id="player_name"
               type="text"
               placeholder="The name of the player.."
               value={this.state.name}
               onChange={this.handleInputChange} />
        <label htmlFor="player_age">Age</label>
        <input name="age"
               id="player_age"
               type="text"
               placeholder="The age of the player.."
               value={this.state.age}
               onChange={this.handleInputChange} />
        <label htmlFor="player_nationality">Nationality</label>
        <input name="nationality"
               id="player_nationality"
               type="text"
               placeholder="The player's nationality.."
               value={this.state.nationality}
               onChange={this.handleInputChange} />
             <label htmlFor="player_club">Club</label>
        <input name="club"
               id="player_club"
               type="text"
               placeholder="The players current club.."
               value={this.state.club}
               onChange={this.handleInputChange} />

        <br></br>
         {this.state.name        &&
          this.state.age         &&
          this.state.nationality &&
          this.state.club ? (
            <input type="submit"
                   className="addform_add_button_enabled"
                   value="Add"
                   />
          ) : (
            <input type="submit"
                   className="addform_add_button_disabled"
                   value="Add"
                   disabled/>
            )}
      </form>
    );
  }
}

export default AddForm;
