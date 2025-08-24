import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        certifications: 'certifications.html',
        contact: 'contact.html',
        login: 'login.html',
      },
    },
  },
  server: {
    port: 5173,
  },
});


