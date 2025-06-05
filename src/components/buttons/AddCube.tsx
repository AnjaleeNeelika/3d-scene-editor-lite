import React, { useState } from 'react'
import type { SceneObject } from '../../types/scene'

interface Props {
    setObjects: React.Dispatch<React.SetStateAction<SceneObject[]>>
    objects: SceneObject[]
}

export const AddCube = ({ objects, setObjects }: Props) => {
    const handleAddCube = () => {
        const newObjects: SceneObject = {
            id: crypto.randomUUID(),
            type: 'cube',
            position: [
                Math.random() * 4, 
                0, 
                Math.random() * 4
            ],
            rotation: [0, 0, 0],
            scale: [1, 1, 1]
        }
        setObjects([...objects, newObjects])
    }

    return (
        <button onClick={handleAddCube} className='bg-blue-500 px-6 py-3 text-white rounded-md shadow-2xl cursor-pointer hover:bg-blue-600'>
            Add a Cube
        </button>
    )
}
