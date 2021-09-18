import GalleryDisplay, {count} from '../images/GalleryDisplay.js';
import {useState, useEffect} from 'react';
import '../styles/home.css';

function Home(props){


    const [randInt, setRandInt] = useState(0)
    let theTimeout;

    const newRandom = function(){
        theTimeout = setTimeout(()=>{
            setRandInt(Math.floor(Math.random()*count))
        },4000)
    }
    //remove timer on componentdidunmount
    useEffect(()=>{
        return()=>{
            clearTimeout(theTimeout)
        }
    })
    newRandom();
    return(
        <div className='centeredBasicImage'>
            Rootin, Tootin, c o w g i r l
            <div className='centeredBasicImage2dHolder'>
                <GalleryDisplay className='Image2d' pos={randInt} />
            </div>
        </div>
    )
}

export default Home;