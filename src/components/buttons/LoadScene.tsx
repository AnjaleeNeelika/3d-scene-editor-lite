import React from 'react'
import type { SceneObject } from '../../types/scene'

interface Props {
    setObjects: React.Dispatch<React.SetStateAction<SceneObject[]>>
    setSelectedId: (id: string | null) => void
}

export const LoadScene = ({ setObjects, setSelectedId }: Props) => {
    const handleLoad = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        const reader = new FileReader()
        reader.onload = () => {
            try {
                const json = JSON.parse(reader.result as string)

                const loadedObjects: SceneObject[] = json.map((obj: any) => ({
                    id: crypto.randomUUID(),
                    type: obj.type,
                    position: obj.position,
                    rotation: obj.rotation,
                    scale: obj.scale
                }))

                console.log("Loaded objects:", loadedObjects)
                setObjects(loadedObjects)
                setSelectedId(null)
            } catch (err) {
                alert("Failed to load the scene: " + (err as Error).message)
            }
        }

        reader.readAsText(file)
    }

    return (
        <div>
            <label htmlFor="scene-loader" className='cursor-pointer'>
                <div className='bg-blue-500 px-6 py-3 text-white rounded-md shadow-2xl hover:bg-blue-600'>
                    Load Scene
                </div>
            </label>
            <input 
                id="scene-loader" 
                type="file" 
                name="" 
                accept='application/json'
                onChange={handleLoad}
                className='hidden'
            />
        </div>
    )
}
