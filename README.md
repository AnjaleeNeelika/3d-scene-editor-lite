# 3D Scene Editor Lite

A lightweight scene editor built with React Three Fiber, TypeScript and Vite.

## 🚀Instructions to Run the Project

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/AnjaleeNeelika/3d-scene-editor-lite.git
cd 3d-scene-editor-lite

# 2. Install the dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in your browser
http://localhost:5173/
```

## 📁Code Structure Overview

```
src/
├── components/
|   └── buttons/
│       ├── AddCube.tsx
|       ├── AddSphere.tsx
|       ├── LoadScene.tsx
│       └── SaveScene.tsx
│   ├── objects/
|       ├── Cube.tsx
│       └── Sphere.tsx
│   ├── ButtonsUI.tsx
│   └── SceneCanvas.tsx
│   
├── types/
│   └── scene.ts
|
├── App.tsx
├── index.css
└── main.tsx
```

## 🐛 Known Isssues/Limitations
  * Cannot add objects in the positions and in colors we want, instead it will add blue cubes and red spheres in random positions (position: random x between -4 and 4, fixed y at 0, random z between -4 and 4).
  * Cannot change the object positions.
  * When the scene is saved the new scales and rotations of the objects are not saved.
  * Objects canoot be deleted.
  * Selection and transform only work on one object at a time.
  * No undo/redo functionalities for scene changes.

## ⏳ What I'd Improve With More Time
  * Add functionalities for adding objects in colors and in the positions we want.
  * Object position changing.
  * Save data for scene changes.
  * Object deletion functionality.
  * Object color change.
  * Select and transform multiple objects at the same time.
  * Undo/redo functionalities for scene changes.
