import { defineConfig } from "vite";

export default defineConfig({
    root: "./src",  // root of the project
    build: {
        outDir: "../dist",  // result folder after build done
        emptyOutDir: true,  // clear dist folder before new build
        rollupOptions: {
            input: './src/index.html'  // starter file (config when have many entry points)
        }
    },
    server: {
        port: 3000,  // port of dev server (can adjustment)
        open: true,  // open browser automatically when start running server
    }
});