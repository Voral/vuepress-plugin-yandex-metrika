import type {Plugin} from '@vuepress/core';
import {path, getDirname} from '@vuepress/utils';

export interface YandexMetrikaPluginOptions {
    id: string;
    options: Object
}

const __dirname = getDirname(import.meta.url);

export const yandexMetrikaPlugin = ({id, options}: YandexMetrikaPluginOptions): Plugin => ({
    name: 'vuepress-plugin-yandex-metrika',
    clientConfigFile: path.resolve(__dirname, './clientAppEnhanceFiles.js'),
    define: {
        YAM_ID: id || false,
        YAM_CONFIG: options || {}
    },
});

export default yandexMetrikaPlugin;
