import React from 'react'
import type { SceneObject } from '../../types/scene'

interface SaveSceneProps {
    objects: SceneObject[]
}

export const SaveScene = ({ objects }: SaveSceneProps) => {
    const handleSave = () => {
        const confirmed = window.confirm("Do you want to download the scene JSON file?");

        if (!confirmed) return

        const data = objects.map(({ type, position, rotation, scale }) => ({
            type,
            position,
            rotation,
            scale,
        }));

        const json = JSON.stringify(data, null, 2)
        const blob = new Blob([json], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        
        const a = document.createElement('a')
        a.href = url
        a.download = 'scene.json'
        a.click()
    }
    return (
        <button 
            onClick={handleSave}
            className='bg-blue-500 px-6 py-3 text-white rounded-md shadow-2xl cursor-pointer hover:bg-blue-600'
        >
            Save Scene
        </button>
    )
}
