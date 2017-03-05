import React, { Component } from 'react';
import AddPlayer from './AddPlayer/AddPlayer'
import SearchBar from './SearchBar/SearchBar';
import './sidebar.css'

function SideBar(props){
  return (
    <div id='sidebar'>
      <SearchBar
        filterText={props.filterText}
        onSearchInput={props.onSearchInput}
      />
      <AddPlayer onAddPlayer={props.onAddPlayer} />
    </div>
  );
}
export default SideBar;
