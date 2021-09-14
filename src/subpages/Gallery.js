import React, {Suspense, useRef, useState} from 'react';
import {Canvas, useFrame, useLoader} from "@react-three/fiber";
import GalleryDisplay from './GalleryDisplay.js';

function Gallery(){
    const mesh = useRef();


    
    return(
        <Canvas>
            <Suspense fallback={null}>
                <GalleryDisplay/>
            </Suspense>
        </Canvas>
    )

}



export default Gallery;