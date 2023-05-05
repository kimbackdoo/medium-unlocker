import { defineConfig } from 'vite'
import { chromeExtension } from 'vite-plugin-chrome-extension'

export default defineConfig({
    plugins: [chromeExtension()],
    build: {
        // lib: {
        //     entry: [
        //         resolve(__dirname, 'src/background.ts'),
        //         resolve(__dirname, 'src/content-script.ts'),
        //     ],
        //     formats: ['es'],
        // },
        rollupOptions: {
            input: 'src/manifest.json',
        },
    },
})
