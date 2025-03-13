import { defineConfig } from 'vite';

export default {
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // Your backend URL
    },
  },
};
