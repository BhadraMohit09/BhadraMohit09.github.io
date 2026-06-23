import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['astronaut.jpeg', 'icon-192.png', 'icon-512.png'],
      manifest: {
        name: 'Bhadra Mohit – Portfolio',
        short_name: 'MBTech',
        description: 'Full Stack Developer specializing in MERN, .NET, and AI/ML. Portfolio of Bhadra Mohit.',
        theme_color: '#1e1b4b',
        background_color: '#0f172a',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        orientation: 'portrait-primary',
        lang: 'en',
        categories: ['portfolio', 'developer', 'technology'],
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
        shortcuts: [
          { name: 'Projects', short_name: 'Projects', url: '/projects', description: 'View my projects' },
          { name: 'Contact', short_name: 'Contact', url: '/contact', description: 'Get in touch' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpeg,jpg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^https:\/\/images\.pexels\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'pexels-images-cache',
              expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
  base: '/',
});
