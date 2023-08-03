import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, splitVendorChunkPlugin } from 'vite';

export default defineConfig({
    plugins: [react(), splitVendorChunkPlugin()],
    base: '/react-ui-library/',
    resolve: {
        alias: {
            '~': resolve(__dirname, './src'),
        },
    },
    server: {
        port: 4200,
    },
});
