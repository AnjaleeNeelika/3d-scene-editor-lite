import { useState } from 'react'
import './App.css'
import { ButtonsUI } from './components/ButtonsUI'
import { SceneCanvas } from './components/SceneCanvas'
import type { SceneObject } from './types/scene';

function App() {
    const [objects, setObjects] = useState<SceneObject[]>([]);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    // const [mode, setMode] = useState('translate');

    return (
        <div className='p-10 bg-slate-100 h-screen'>
            <div className='h-fit'>
                <ButtonsUI 
                    objects={objects} 
                    setObjects={setObjects} 
                    selectedId={selectedId} 
                    setSelectedId={setSelectedId} 
                />
            </div>

            <div className='canvas-container h-[calc(100vh-18vh)] mt-10'>
                <SceneCanvas 
                    objects={objects} 
                    setObjects={setObjects} 
                    selectedId={selectedId} 
                    setSelectedId={setSelectedId} 
                />
                {/* {selectedId ? (
                    <div className="flex gap-10 p-5 fixed bottom-20 right-20 bg-white shadow-2xl border-gray-300 rounded-md">
                        <label className='text-gray-500 px-2 py-0.5 rounded-md'>Mode</label>
                        <div className='bg-gray-100 px-5 py-2 rounded-md'>
                            <select value={mode} onChange={(e) => setMode(e.target.value)} className='bg-gray-100 px-3'>
                                <option value="translate">Move</option>
                                <option value="rotate">Rotate</option>
                                <option value="scale">Scale</option>
                            </select>
                        </div>
                        
                    </div>
                ) : (
                    <></>
                )}    */}
            </div>            
        </div>
    )
}

export default App
