import React, {Suspense, useRef, useState} from 'react';
import {Canvas, useFrame, useLoader} from "@react-three/fiber";
import {OrbitControls} from '@react-three/drei';
import GalleryDisplay, {count} from '../models/GalleryDisplay.js';
import '../styles/Gallery.css';

function Gallery(){
    const mesh = useRef();
    const [position, setPosition] = useState(0);
    
    
    const scroll= function(val){
        if(val<0 && position==0){
            setPosition(count-1)
        }
        else{
            setPosition((position + val)%count);
        }      
    }
    
    return(
        <div className='Canvas'>
            <div className='galleryButton left' onClick={()=>{scroll(-1)}}>&#9664;</div>
            <Canvas>
                <Suspense fallback={null}>
                    <GalleryDisplay pos={position}/>
                    <OrbitControls/>
                    <ambientLight intensity={1}/>
                </Suspense>
            </Canvas>
            <div className='galleryButton right' onClick={()=>{scroll(1)}}>&#9654;</div>
        </div>
    )

}



export default Gallery;