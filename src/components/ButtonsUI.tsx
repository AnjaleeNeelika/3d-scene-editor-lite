import React from 'react'
import { AddCube } from './buttons/AddCube'
import { AddSphere } from './buttons/AddSphere'
import { LoadScene } from './buttons/LoadScene'
import { SaveScene } from './buttons/SaveScene'

export const ButtonsUI = () => {
    return (
        <div className='flex justify-around items-center'>
            <AddCube />
            <AddSphere />
            <SaveScene />
            <LoadScene />
        </div>
    )
}