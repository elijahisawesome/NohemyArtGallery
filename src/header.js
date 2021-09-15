import React, {Component} from 'react';
import Gallery3d from './subpages/Gallery3d.js';
import Gallery2d from './subpages/Gallery2d.js';
import Home from './subpages/Home.js';
import Contact from './subpages/Contact.js';
import './styles/header.css'


class header extends Component{
    constructor(props){
        super(props);
        this.the3D = <Gallery3d/>;
        this.the2D = <Gallery2d/>;
        this.theHome = <Home/>;
        this.theContact=<Contact/>;
        this.selectPage = this.selectPage.bind(this);
        this.state = {
            content:this.theHome,
            subMenu:<div></div>
        }
    }
    
    selectPage(event){
        let name = 'the'+event.target.innerText;
        this.setState(()=>{
            return{content:this[name],
                    subMenu: <div></div>}
        })
    }
    selectSubPage(event){
        this.setState(()=>{
            return {subMenu:<ul>
                <div onClick = {(event)=>this.selectPage(event)}>3D</div>
                <div onClick = {(event)=>this.selectPage(event)}>2D</div>
            </ul>}
        })
    }

    render(){
        console.log('hey!!!!');
        return(
            <div id = 'mainPage'>
                <div id='VerticalMenu'>
                    <button className="navButton" onClick = {(event)=>this.selectPage(event)}>Home</button>
                    <button className="navButton" onClick = {(event)=>this.selectSubPage(event)}>Gallery</button>
                    {this.state.subMenu}
                    <button className="navButton" onClick = {(event)=>this.selectPage(event)}>Contact</button>
                </div>
                <div className='content'>
                    {this.state.content}
                </div>
            </div>
        )
    }
}

export default header;