import { defineConfig } from 'tsup';

export default defineConfig({
    clean: true,
    target: 'ESNext',
    entry: ['src/index.ts', '!src/scripts'],
    format: ['cjs', 'esm'],
    external: ['react'],
});
