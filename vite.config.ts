import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
// });

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  Object.assign(process.env, loadEnv(mode, process.cwd(), '')) ; 
  return defineConfig({
    plugins: [react()],
    // To access env vars here use process.env.TEST_VAR
    define: {
      'process.env': {},
    } 
  });
};