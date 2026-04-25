import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  base: mode === 'production' ? '/{{REPO_NAME}}/' : '/',
});
