import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  base: mode === 'production' ? '/{{REPO_NAME}}/' : '/',
}));
