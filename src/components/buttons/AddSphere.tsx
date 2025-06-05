import React from 'react'
import type { SceneObject } from '../../types/scene'

interface Props {
    setObjects: React.Dispatch<React.SetStateAction<SceneObject[]>>
    objects: SceneObject[]
}

export const AddSphere = ({ objects, setObjects }: Props) => {
    const handleAddSphere = () => {
        const newObjects: SceneObject = {
            id: crypto.randomUUID(),
            type: 'sphere',
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
        <button onClick={handleAddSphere} className='bg-blue-500 px-6 py-3 text-white rounded-md shadow-2xl cursor-pointer hover:bg-blue-600'>
            Add a Sphere
        </button>
    )
}
