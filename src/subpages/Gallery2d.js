import React,{ Component } from "react"
import GalleryDisplay, {count}  from '../images/GalleryDisplay.js';
import FullSize from '../images/GalleryDisplayThumbnails.js';

class Gallery2d extends Component{
    constructor(props){
        super(props);
        this.state = {
            position:0,
            hoverClass:'notVisible'
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
    hoveredImage(hovered){
        if(hovered){
        this.setState({
            hoverClass:'visible'
        })}
        else{
            this.setState({
                hoverClass:'notVisible'
            })
        }
    }
    render(){
        return(
            <div className='Canvas2d'>
                <div className='galleryButton left' onClick={()=>{this.scroll(-1)}}>&#9664;</div>
                <div className='Image2dHolder' onMouseEnter={()=>{this.hoveredImage(true)}} onMouseLeave={()=>{this.hoveredImage(false)}}>
                    <GalleryDisplay className='Image2d' pos={this.state.position}/>
                    <div>{this.state.position+1}-{count}</div>
                    <FullSize className={this.state.hoverClass} id={'hoverboy'} pos={this.state.position}/>
                </div>
                <div className='galleryButton right' onClick={()=>{this.scroll(1)}}>&#9654;</div>
            </div>
        )
    }
}

export default Gallery2d;