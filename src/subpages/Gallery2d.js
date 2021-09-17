import React,{ Component } from "react"
import GalleryDisplay from '../images/GalleryDisplay.js';
import {count} from '../images/GalleryDisplay.js';

class Gallery2d extends Component{
    constructor(props){
        super(props);
        this.state = {
            position:0
        }
    }
    scroll(val){
        if(val<0 && this.state.position==0){
            this.setState(()=>{
                return {position: count-1} 
            })
        }
        else{
            this.setState((prevState)=>{
                return {position: (prevState.position + val)%count} 
            })
        }      
    }
    render(){
        return(
            <div>
                <div className='galleryButton left' onClick={()=>{this.scroll(-1)}}>&#9664;</div>
                <GalleryDisplay pos={this.state.position}/>
                <div className='galleryButton right' onClick={()=>{this.scroll(-1)}}>&#9654;</div>
            </div>
        )
    }
}

export default Gallery2d;