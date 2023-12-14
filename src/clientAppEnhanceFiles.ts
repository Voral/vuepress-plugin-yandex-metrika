import {defineClientConfig} from '@vuepress/client';

declare global {
    interface Window {
        yaMetrika?: {
            loaded: boolean;
            push: (...args: any[]) => any;
        };
    }
}

declare const __VUEPRESS_DEV__: boolean;
declare const __VUEPRESS_SSR__: boolean;
declare const YAM_ID: string;
declare const YAM_CONFIG: Object;
declare var ym: Function;

export default defineClientConfig({
    enhance({router}) {
        if (__VUEPRESS_DEV__ || __VUEPRESS_SSR__ || !YAM_ID) return;

        if (window.yaMetrika) {
            return;
        }
        (function (m, e, t, r, i, k, a) {
            m[i] = m[i] || function () {
                (m[i].a = m[i].a || []).push(arguments)
            };
            m[i].l = (new Date()).getTime();
            for (let j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) {
                    return;
                }
            }
            k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
        })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        router.afterEach(function (to) {
            ym(YAM_ID, "init", YAM_CONFIG);
        })
    },
});
