import React, { Component } from 'react';
import AddForm from './AddForm/AddForm'

function AddPlayer(props){
  return (
    <div>
      <AddForm onAddPlayer={props.onAddPlayer}/>
    </div>
  );
}

export default AddPlayer;
