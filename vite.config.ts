import {defineConfig} from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import postcssRemToResponsivePixel from 'postcss-rem-to-responsive-pixel'
const {UnifiedViteWeappTailwindcssPlugin: vwt} = require('weapp-tailwindcss-webpack-plugin/vite')

const isH5 = process.env.UNI_PLATFORM === 'h5';
const isApp = process.env.UNI_PLATFORM === 'app-plus';
const weappTailwindcssDisabled = isH5 || isApp;


const vitePlugins = [uni()]
const postcssPlugins = [autoprefixer(), tailwindcss()]
// 注： 打包成 h5 和 app 都不需要开启插件配置
if (!weappTailwindcssDisabled) {
    vitePlugins.push(vwt())
    postcssPlugins.push(postcssRemToResponsivePixel({
        rootValue: 32,
        propList: ['*'],
        transformUnit: 'rpx'
    }))
}

export default defineConfig({
    plugins: vitePlugins,
    css: {
        postcss: {
            plugins: postcssPlugins
        }
    }
});
