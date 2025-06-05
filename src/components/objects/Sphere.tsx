import React, { useRef, useState } from 'react'
import * as THREE from 'three'

export const Sphere = ({ id, position, rotation, scale, color, selected, onSelect, meshRef }: { id: string, position: [number, number, number], rotation: [number, number, number], scale: [number, number, number], color: string, selected: boolean, onSelect:(id: string | null) => void, meshRef: React.Ref<THREE.Mesh> | null }) => {
    const [hovered, setHovered] = useState(false);
    
    return (
        <mesh 
            ref={meshRef ?? undefined}
            position={position}
            onPointerOver={() => {
                setHovered(true)
                document.body.style.cursor = 'pointer'
            }}
            onPointerOut={() => {
                setHovered(false)
                document.body.style.cursor = 'default'
            }}
            onClick={() => {
                onSelect(selected ? null : id)
                console.log(id)
            }}
        >
            <sphereGeometry args={[0.5, 100, 100]} />
            <meshStandardMaterial color={selected ? 'yellow' : (color)} />
        </mesh>
    )
}

