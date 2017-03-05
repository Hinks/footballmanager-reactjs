import React, { Component } from 'react';
import './search_bar.css'

class SearchBar extends Component {

  handleChange = () => {
    this.props.onSearchInput(
      this.filterTextInput.value
    );
  }

  render() {
    return (
      <div id='search_bar'>
        <form>
          <label htmlFor="name_search">Search</label>
          <input
            type="text"
            id="name_search"
            placeholder="Search by name.."
            value={this.props.filterText}
            ref={(input) => this.filterTextInput = input}
            onChange={this.handleChange}
            />
        </form>
      </div>
    );
  }
}

export default SearchBar;
