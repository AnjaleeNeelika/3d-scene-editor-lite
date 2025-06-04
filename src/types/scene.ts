export interface SceneObject {
    id: string,
    type: 'cube' | 'sphere',
    position: [number, number, number],
    rotation: [number, number, number],
    scale: [number, number, number]
}