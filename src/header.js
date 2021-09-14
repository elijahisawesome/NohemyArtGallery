import React, {Component} from 'react';
import Gallery from './subpages/Gallery.js';
import Home from './subpages/Home.js';
import Contact from './subpages/Contact.js';
import './styles/header.css'


class header extends Component{
    constructor(props){
        super(props);
        this.theGallery = <Gallery/>;
        this.theHome = <Home/>;
        this.theContact=<Contact/>;
        this.selectPage = this.selectPage.bind(this);
        this.state = {
            content:null,
        }
    }
    
    selectPage(event){
        let name = 'the'+event.target.innerText;
        this.setState(()=>{
            return{content:this[name],}
        })
    }

    render(){
        console.log('hey!!!!');
        return(
            <div>
                <button onClick = {(event)=>this.selectPage(event)}>Home</button>
                <button onClick = {(event)=>this.selectPage(event)}>Gallery</button>
                <button onClick = {(event)=>this.selectPage(event)}>Contact</button>
                <div className='content'>
                    {this.state.content}
                </div>
            </div>
        )
    }
}

export default header;