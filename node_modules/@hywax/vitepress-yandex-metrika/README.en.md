[![vitepress-yandex-metrika](https://raw.githubusercontent.com/hywax/vitepress-yandex-metrika/main/.github/static/cover.en.png)](https://github.com/hywax/vitepress-yandex-metrika)

# VitePress Yandex Metrika


[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

[Русский](./README.md) | **English**

Plugin for VitePress to track Yandex Metrika statistics.

<details>
  <summary><b>Table of Contents</b></summary>

* [Features](#-features)
* [Installation](#-installation)
* [Usage](#-usage)
  * [Setup](#-setup)
  * [Configuration](#-configuration)
* [Contributors](#-contributors)
* [License](#-license)
</details>

## 🎯 Features

* 📊 Support multiply counters
* ✨ Correct work with SPA
* ✅ Support for all settings
* 🌐 CDN option
* 0️⃣ Zero dependencies
* 🪄️ TypeScript support

## ✨ Installation

```shell
# Using pnpm
pnpm add @hywax/vitepress-yandex-metrika -D

# Using yarn
yarn add @hywax/vitepress-yandex-metrika -D

# Using npm
npm install @hywax/vitepress-yandex-metrika -D
```

## ⚡ Usage

### 🚀 Setup

Add `yandexMetrika` to the `enhanceApp` section of theme `index.ts`

```typescript
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { yandexMetrika } from '@hywax/vitepress-yandex-metrika'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    yandexMetrika(ctx, {
      counter: {
        id: 12345678
      },
    })
  },
} satisfies Theme
```

### ⚙️ Configuration

You can customize the plugin `yandexMetrika` by passing the required parameters to the settings object.

```typescript
export interface YandexMetrikaOptions {
  enabled?: boolean                                             // default: true
  counter: YandexMetrikaCounter | YandexMetrikaCounter[]
  cdn?: {
    tag?: string                                                // default: https://mc.yandex.ru/metrika/tag.js
    watch?: string                                              // default: https://mc.yandex.ru/watch
  }
}

export interface YandexMetrikaCounter {
  id: number
  initParams?: {
    defer?: boolean                                             // default: false
    clickmap?: boolean                                          // default: true
    trackLinks?: boolean                                        // default: true
    accurateTrackBounce?: boolean                               // default: true
    webvisor?: boolean                                          // default: false
    ecommerce?: boolean | string | Array<string | boolean>      // default: false
    trustedDomains?: string[]                                   // default: -
    childIframe?: boolean                                       // default: false
    type?: number                                               // default: 0
    triggerEvent?: boolean                                      // default: false
  }
}
```

More information can be found on the [documentation page](https://yandex.com/support/metrica/code/counter-initialize.html).

## 🏆 Contributors

A huge thank you to everyone who is helping to improve. Thanks to you, the project can evolve!

<img src="https://raw.githubusercontent.com/hywax/vitepress-yandex-metrika/main/.github/static/contributors.svg" alt="VitePress Yandex Metrika Contributors" width="100%"/>

## 📄 License

The VitePress Yandex Metrika is based on open source code, according to [MIT License](LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@hywax/vitepress-yandex-metrika/latest.svg?logo=hackthebox&color=4A4DFF&logoColor=fff
[npm-version-href]: https://npmjs.com/package/@hywax/vitepress-yandex-metrika
[npm-downloads-src]: https://img.shields.io/npm/dm/@hywax/vitepress-yandex-metrika.svg?colorB=4A4DFF
[npm-downloads-href]: https://npmjs.com/package/@hywax/vitepress-yandex-metrika
[license-src]: https://img.shields.io/badge/License-MIT-4A4DFF?logo=opensourceinitiative&logoColor=fff
[license-href]: https://npmjs.com/package/@hywax/vitepress-yandex-metrika
