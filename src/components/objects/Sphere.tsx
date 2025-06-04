import React, { useState } from 'react'

export const Sphere = ({ position, color }: { position: [number, number, number], color: string }) => {
    const [hovered, setHovered] = useState(false);
    
    return (
        <mesh 
            position={position}
            onPointerOver={(e) => {
                e.stopPropagation()
                setHovered(true)
                document.body.style.cursor = 'pointer'
            }}
            onPointerOut={(e) => {
                e.stopPropagation()
                setHovered(false)
                document.body.style.cursor = 'default'
            }}
            
        >
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}

