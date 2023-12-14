# vuepress-plugin-yandex-metrika

[Русский](README.ru-RU.md) | English

> Note: This plugin is provided for **VuePress 2**

[Yandex Metrika](https://metrika.yandex.ru/) plugin for VuePress 2, automatically add [Yandex Metrika Counter](https://yandex.ru/support/metrica/user-cases/general.html) to your VuePress site.

![Current Release](https://img.shields.io/github/release/voral/vuepress-plugin-yandex-metrika.svg?style=flat-square)
![Release Date](https://img.shields.io/github/release-date/voral/vuepress-plugin-yandex-metrika?style=flat-square)
![Monthly Downloads](https://img.shields.io/npm/dm/vuepress-plugin-yandex-metrika?style=flat-square)
![MIT License](https://img.shields.io/github/license/voral/vuepress-plugin-yandex-metrika.svg?style=flat-square)


## Install

```bash
pnpm add -D vuepress-plugin-yandex-metrika
# OR
yarn add -D vuepress-plugin-yandex-metrika
# OR
npm install -D vuepress-plugin-yandex-metrika
```

## Usage

```js
import yandexMetrikaPlugin from 'vuepress-plugin-yandex-metrika';

module.exports = {
  plugins: [
    yandexMetrikaPlugin({
      id: 123123123,
      config: {
        clickmap: false,
        trackLinks: true,
        accurateTrackBounce: true,
        ecommerce: "dataLayer"         
      }
    }),
  ],
};
```

The counter is not added to the pages in the development and SSR mode

## Options

### id

- Type: `string` | `Number`

- Description: The counter ID assigned in the personal account [Yandex Metrika](https://metrika.yandex.ru/list)

### options

- Type: `Object`

- Description: Counter parameters that can be configured and seen in the counter insertion script generated in your 
personal account [Yandex Metrika](https://metrika.yandex.ru/list). And also get acquainted with the available in 
[counter documentation](https://yandex.ru/support/metrica/code/counter-initialize.html).