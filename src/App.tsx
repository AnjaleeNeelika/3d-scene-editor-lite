import { useState } from 'react'
import './App.css'
import { ButtonsUI } from './components/ButtonsUI'
import { SceneCanvas } from './components/SceneCanvas'

function App() {
    const [objects, setObjects] = useState();

    return (
        <div className='p-10 bg-slate-100 h-screen'>
            <div className='h-fit'>
                <ButtonsUI 
                    setObjects={setObjects} 
                />
            </div>

            <div className='canvas-container h-[calc(100vh-18vh)] mt-10'>
                <SceneCanvas />
            </div>            
        </div>
    )
}

export default App
