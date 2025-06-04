import React from 'react'
import { AddCube } from './buttons/AddCube'
import { AddSphere } from './buttons/AddSphere'
import { LoadScene } from './buttons/LoadScene'
import { SaveScene } from './buttons/SaveScene'
import type { SceneObject } from '../types/scene'

interface Props {
    objects: SceneObject[]
    setObjects: React.Dispatch<React.SetStateAction<SceneObject[]>>
    selectedId: string | null
    setSelectedId: (id: string | null) => void
}

export const ButtonsUI = ({ objects, setObjects, setSelectedId }: Props) => {
    return (
        <div className='flex flex-wrap gap-10 justify-around items-center'>
            {/* button to add a cube */}
            <AddCube objects={objects} setObjects={setObjects} />
            {/* button to add a sphere */}
            <AddSphere objects={objects} setObjects={setObjects} />
            {/* button to save a scene */}
            <SaveScene />
            {/* button to load a scene */}
            <LoadScene />
        </div>
    )
}