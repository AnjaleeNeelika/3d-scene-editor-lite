import { useState } from 'react'
import './App.css'
import { ButtonsUI } from './components/ButtonsUI'
import { SceneCanvas } from './components/SceneCanvas'
import type { SceneObject } from './types/scene';

function App() {
    const [objects, setObjects] = useState<SceneObject[]>([]);
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
        <div className='p-10 bg-slate-100 h-screen'>
            <div className='h-fit'>
                <ButtonsUI objects={objects} setObjects={setObjects} selectedId={selectedId} setSelectedId={setSelectedId} />
            </div>

            <div className='canvas-container h-[calc(100vh-18vh)] mt-10'>
                <SceneCanvas objects={objects} setObjects={setObjects} selectedId={selectedId} setSelectedId={setSelectedId} />
            </div>            
        </div>
    )
}

export default App
