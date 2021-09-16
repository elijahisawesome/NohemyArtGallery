import React, { Component } from 'react'
import Rolodex from './Rolodex';
import Button from './Button.js';

//add models to a queue, select from queue using props.

let count;

class GalleryDisplay extends Component{
  constructor(props){
    super(props)
    this.models = [<Rolodex/>,<Button/>];
    count = this.models.length;
  }
  
  render(){

    return(
      this.models[this.props.pos]
    )
  }
}


export {count}
export default GalleryDisplay