import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  server: {
    port: 3000,
  },
});
