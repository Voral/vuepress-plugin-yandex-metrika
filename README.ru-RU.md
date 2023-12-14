# vuepress-plugin-yandex-metrika

Русский | [English](README.md)

> Примечание: Этот плагин предназначен для **VuePress 2**

Плагин [Яндекс Метрики](https://metrika.yandex.ru/) для VuePress 2, автоматически добавляет код [Счетчика Яндекс Метрики](https://yandex.ru/support/metrica/user-cases/general.html) на страницы VuePress сайта.

![Current Release](https://img.shields.io/github/release/voral/vuepress-plugin-yandex-metrika.svg?style=flat-square)
![Release Date](https://img.shields.io/github/release-date/voral/vuepress-plugin-yandex-metrika?style=flat-square)
![Monthly Downloads](https://img.shields.io/npm/dm/vuepress-plugin-yandex-metrika?style=flat-square)
![MIT License](https://img.shields.io/github/license/voral/vuepress-plugin-yandex-metrika.svg?style=flat-square)


## Установка

```bash
pnpm add -D vuepress-plugin-yandex-metrika
# или
yarn add -D vuepress-plugin-yandex-metrika
# или
npm install -D vuepress-plugin-yandex-metrika
```

## Применение

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
Счетчик не добавляется на страницы в режиме разработки и SSR

## Параметры

### id

- Тип: `string` | `Number`

- Описание: Идентификатор счетчика присваиваемый в личном кабинете [Яндекс Метрики](https://metrika.yandex.ru/list)

### options

- Тип: `Object`

- Описание: Параметры счетчика, которые можно настроить и увидеть в скрипте вставки счетчика генерируемом в личном кабинете [Яндекс Метрики](https://metrika.yandex.ru/list). А так же ознакомится с доступными в [Документации счетчика](https://yandex.ru/support/metrica/code/counter-initialize.html)



