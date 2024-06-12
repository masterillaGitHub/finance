import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import mkcert from 'vite-plugin-mkcert'
import { VitePWA } from 'vite-plugin-pwa'

const vitePWA = VitePWA({
  registerType: 'autoUpdate',
  outDir: 'dist',
  manifest: {
    name: 'Finance App',
    short_name: 'Finance',
    description: 'App which save your money',
    theme_color: '#ffffff',
    icons: [
      {src: 'assets/images/icons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png'},
      {src: 'assets/images/icons/android-chrome-256x256.png', sizes: '256x256', type: 'image/png'},
    ],
    "screenshots": [
      {
        "src": "assets/images/mobile_1.jpg",
        "sizes": "576x1280",
        "type": "image/jpg",
        "form_factor": "narrow",
        "label": "Рахунки"
      },
      {
        "src": "assets/images/mobile_2.jpg",
        "sizes": "576x1280",
        "type": "image/jpg",
        "form_factor": "narrow",
        "label": "Типи рахунків"
      },
      {
        "src": "assets/images/mobile_3.jpg",
        "sizes": "576x1280",
        "type": "image/jpg",
        "form_factor": "wide",
        "label": "Додати новий рахунок"
      },
      {
        "src": "assets/images/mobile_4.jpg",
        "sizes": "576x1280",
        "type": "image/jpg",
        "form_factor": "wide",
        "label": "Історія транзакцій"
      }
    ]
  }
})
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'finance.local',
    port: '5200',
    strictPort: true,
    https: false,
    cors: false,
  },
  plugins: [
    vue(),
    // VueDevTools(),
    mkcert(),
    vitePWA,
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  }
})
