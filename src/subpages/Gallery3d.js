import React, {Suspense, useRef, useState} from 'react';
import {Canvas, useFrame, useLoader} from "@react-three/fiber";
import {OrbitControls} from '@react-three/drei';
import GalleryDisplay from './GalleryDisplay.js';
import '../styles/Gallery.css';

function Gallery(){
    const mesh = useRef();


    
    return(
        <div className='Canvas'>
            <Canvas>
                <Suspense fallback={null}>
                    <GalleryDisplay/>
                    <OrbitControls/>
                    <ambientLight intensity={1}/>
                </Suspense>
            </Canvas>
        </div>
    )

}



export default Gallery;