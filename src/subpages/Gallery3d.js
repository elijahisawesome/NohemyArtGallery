import React, {Suspense, useRef, useState} from 'react';
import {Canvas, useFrame, useLoader} from "@react-three/fiber";
import {OrbitControls} from '@react-three/drei';
import GalleryDisplay from '../models/GalleryDisplay.js';
import '../styles/Gallery.css';

function Gallery(){
    const mesh = useRef();
    const [position, setPosition] = useState(0);
    
    
    const scroll= function(val){
        if(val<0 && position==0){
            setPosition(GalleryDisplay.count-1)
        }
        else{
            setPosition(GalleryDisplay.count%(position + val));
        }      
    }

    
    return(
        <div className='Canvas'>
            <Canvas>
                <Suspense fallback={null}>
                    <GalleryDisplay pos={position}/>
                    <OrbitControls/>
                    <ambientLight intensity={1}/>
                </Suspense>
            </Canvas>
        </div>
    )

}



export default Gallery;