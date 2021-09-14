import React, {Suspense, useRef, useState} from 'react';
import {Canvas, useFrame, useLoader} from "@react-three/fiber";
import {OrbitControls} from '@react-three/drei';
import GalleryDisplay from './GalleryDisplay.js';

function Gallery(){
    const mesh = useRef();


    
    return(
        <Canvas>
            <Suspense fallback={null}>
                <GalleryDisplay/>
                <OrbitControls/>
                <ambientLight intensity={1}/>
            </Suspense>
        </Canvas>
    )

}



export default Gallery;