/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./Default_Button.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Default_Button.geometry}
        material={nodes.Default_Button.material}
        position={[0.13, -0.36, -2.67]}
        rotation={[0, 0, -0.67]}
      />
    </group>
  )
}

useGLTF.preload('/Default_Button.glb')