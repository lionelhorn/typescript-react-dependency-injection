import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import {deepkitType} from "@deepkit/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    deepkitType(),
    tsconfigPaths(),
  ],
})
