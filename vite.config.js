// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
// ELIMINAR TODAS las importaciones de 'path' y 'url'

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
  ],
  
  test: {
    globals: true, 
    environment: 'jsdom', 
    
    // CORRECCIÓN FINAL: Usar la ruta relativa a la carpeta 'test'
    setupFiles: './src/test/setupTest.js', 
    
    include: ['**/*.{test,spec}.{js,jsx,ts,tsx}'], 
    
    deps: {
      inline: [
        /@testing-library\/react/, 
        /jsdom/, 
        /parse5/ 
      ],
      interopDefault: true 
    }
  },
});