import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// REQUIRED FIX FOR REACT 19 + VITE HOOKS BUG
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      fastRefresh: true,
    }),
     tailwindcss()
  ]
})





// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


