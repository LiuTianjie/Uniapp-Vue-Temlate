import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import WindiCSS from 'vite-plugin-windicss';
import MiniProgramTailwind from '@dcasia/mini-program-tailwind-webpack-plugin/rollup';
import AutoImport from "unplugin-auto-import/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    WindiCSS(),
    MiniProgramTailwind(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      imports: ["vue", "uni-app"],
      dts: "typings/auto-imports.d.ts",
    }),
  ],
})
