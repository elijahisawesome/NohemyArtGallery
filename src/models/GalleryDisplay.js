import React, { Component } from 'react'
import Rolodex from './Rolodex.js';
import Button from './Button.js';

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