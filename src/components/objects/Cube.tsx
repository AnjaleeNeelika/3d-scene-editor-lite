import React from 'react'

export const Cube = ({ position }: { position: [number, number, number] }) => {
    return (
        <mesh position={position}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="blue" />
        </mesh>
    )
}

