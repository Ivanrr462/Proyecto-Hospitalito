import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/Hospitalito/enfermeria/dist/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mapaCamas: resolve(__dirname, 'pages/mapa-camas.html'),
        hojaMedicacion: resolve(__dirname, 'pages/hoja-medicacion.html'),
      },
    },
  },
})