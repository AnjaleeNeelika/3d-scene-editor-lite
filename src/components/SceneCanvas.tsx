import { OrbitControls, TransformControls } from "@react-three/drei"
import { Canvas, useThree } from "@react-three/fiber"
import { Cube } from "./objects/Cube"
import { Sphere } from "./objects/Sphere"
import type { SceneObject } from "../types/scene"
import { useRef, useState } from "react"
import * as THREE from 'three'

interface Props {
    objects: SceneObject[]
    setObjects: React.Dispatch<React.SetStateAction<SceneObject[]>>
    selectedId: string | null
    setSelectedId: (id: string | null) => void
}

export const SceneCanvas = ({ objects, selectedId, setSelectedId }: Props) => {
    const [mode, setMode] = useState('translate');
    const meshRefs = useRef<Record<string, THREE.Mesh>>({});

    return (
        <>
            <Canvas
                camera={{
                    position: [5, 5, 5],
                    fov: 60
                }}
                className="w-full bg-slate-200"
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={0.5} />
                <OrbitControls />

                {objects.map(obj => {
                    const isSelected = selectedId === obj.id

                    const refCallback = (el: THREE.Mesh | null) => {
                        if (el) meshRefs.current[obj.id] = el
                    }

                    return obj.type === 'cube' ? (
                        <Cube 
                            key={obj.id}
                            id={obj.id}
                            position={obj.position} 
                            rotation={obj.rotation}
                            scale={obj.scale}
                            color="blue"
                            selected={selectedId === obj.id}
                            onSelect={setSelectedId}
                            meshRef={isSelected ? refCallback : null}
                        />
                    ) : (
                        <Sphere 
                            key={obj.id}
                            id={obj.id}
                            position={obj.position} 
                            rotation={obj.rotation}
                            scale={obj.scale}
                            color="red"
                            selected={selectedId === obj.id}
                            onSelect={setSelectedId}
                            meshRef={isSelected ? refCallback : null}
                        /> 
                    )
                })}  

                {selectedId && meshRefs.current[selectedId] && (
                    <TransformControls
                        object={meshRefs.current[selectedId]}
                        mode={mode as 'translate' | 'rotate' | 'scale'}
                    />
                )}                  
            </Canvas>

            {/* if an object is selcted it will show the dropdown with the transform control modes */}
            {selectedId ? (
                <div className="flex gap-10 p-5 fixed bottom-20 right-20 bg-white shadow-2xl border-gray-300 rounded-md">
                    <label className='text-gray-500 px-2 py-0.5 rounded-md'>Mode</label>
                    <div className='bg-gray-100 px-5 py-2 rounded-md'>
                        <select value={mode} onChange={(e) => setMode(e.target.value)} className='bg-gray-100 px-3 outline-none'>
                            <option value="translate">Move</option>
                            <option value="rotate">Rotate</option>
                            <option value="scale">Scale</option>
                        </select>
                    </div>
                    
                </div>
            ) : (
                <></>
            )} 
        </>
    )
}
