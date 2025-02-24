import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/core-explore/core-js-contents/',  // Reflects GitHub Pages path
  plugins: [react()],
});
