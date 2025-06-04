import React from 'react'

export const Sphere = ({ position }: { position: [number, number, number] }) => {
    return (
        <mesh position={position}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="red" />
        </mesh>
    )
}

