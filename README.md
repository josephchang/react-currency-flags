# React currency flags

## What is this?

Using the images from [transferwise/currency-flags](https://github.com/transferwise/currency-flags), this library uses `styled-components` to create React components for use in your app. Please be aware that the images are in base64 format, so if you are concerned with the bundle size, I suggest that you clone the aforementioned TransferWise's repo and store it in a CDN solution of your own (the distributed format that repo is also base64 when built, so simply installing that module won't work).

## Installation

### Yarn

```sh
$ yarn add react-currency-flags
```

### NPM

```sh
$ npm install react-currency-flags
```

## Usage

```js
import CurrencyFlag from 'react-currency-flags';

const CurrencyFlagComponent1 = () => <CurrencyFlag currency="USD" size="sm" />;

const CurrencyFlagComponent2 = () => <CurrencyFlag currency="EUR" width={38} />;
```

- **currency** (_required_, string): 3-letter ISO 4217 currency code (https://en.wikipedia.org/wiki/ISO_4217)
- **size** (_optional_, string): The predefined size to use; possible values are `sm`, `md`, `lg`, `xl`
- **width** (_optional_, number): The width of the flag, height will be calculated to keep aspect ratio if no height value is provided
- **height** (_optional_, number): The height of the flag, width will be calculated to keep aspect ratio if no width value is provided

You should provide either the `size`, or `width` or `height`; `size` will take precedence if all values are provided.

See examples in the `examples` folder.

## Why not SVG?

While SVG provides the advantage of scaling, but some flags, such as Mexico's, are very complicated graphically, and would therefore create incredibly large file sizes.
