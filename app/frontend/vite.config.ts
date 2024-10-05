import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3001
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@config': path.resolve(__dirname, './src/configs'),
      '@module': path.resolve(__dirname, './src/modules'),
      '@ui': path.resolve(__dirname, './src/packages/ui'),
      '@package': path.resolve(__dirname, './src/packages')
    }
  }
});
