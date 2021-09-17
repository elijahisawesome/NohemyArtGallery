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
        this.subMenu = <ul className = 'subMenu'>
            <div onClick = {(event)=>this.selectPage(event)}>3D</div>
            <div onClick = {(event)=>this.selectPage(event)}>2D</div></ul>
        this.selectPage = this.selectPage.bind(this);
        this.state = {
            content:this.theHome,
            subMenu:this.subMenu
        }
    }
    
    selectPage(event){
        let name = 'the'+event.target.innerText;
        this.pageSelected()
        this.setState(()=>{
            return{content:this[name],}
        })
    }
    selectSubPage(event){
        let visibleMenu = document.getElementsByClassName('subMenu');
        visibleMenu[0].classList.add('visible');
    }
    pageSelected(){
        let visibleMenu = document.getElementsByClassName('subMenu');
        visibleMenu[0].classList.remove('visible');
    }

    render(){
        return(
            <div id = 'mainPage'>
                <div id='VerticalMenu'>
                    <div className = 'navDiv'>
                        <button className="navButton" onClick = {(event)=>this.selectPage(event)}>Home</button>
                    </div>
                    <div className = 'navDiv'>
                        <button className="navButton" onClick = {(event)=>this.selectSubPage(event)}>Gallery</button>
                        <div className = 'subMenuHolder'>
                            {this.state.subMenu}
                        </div>
                    </div>
                    <div className = 'navDiv'>
                        <button className="navButton" onClick = {(event)=>this.selectPage(event)}>Contact</button>
                    </div>
                </div>
                <div className='content'>
                    {this.state.content}
                </div>
            </div>
        )
    }
}

export default header;