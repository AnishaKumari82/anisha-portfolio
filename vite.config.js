// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     force: true,
//     include: ['@react-three/drei'],
//   },
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    force: true,
    include: ['three', '@react-three/fiber', '@react-three/drei', 'maath'],
    exclude: ['three/examples/jsm/geometries/CapsuleGeometry']
  },
  server: {
    fs: {
      allow: ['..']
    }
  },
  resolve: {
    dedupe: ['three']
  }
});