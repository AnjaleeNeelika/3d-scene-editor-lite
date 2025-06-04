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
            position: [0, 0, 0],
            rotation: [0, 0, 0],
            scale: [0, 0, 0]
        }
        setObjects([...objects, newObjects])
    }

    return (
        <button onClick={handleAddSphere} className='bg-blue-500 px-6 py-3 text-white rounded-md shadow-2xl cursor-pointer'>
            Add a Sphere
        </button>
    )
}
