# [@mrolaolu/helpers](https://npm.im/@mrolaolu/helpers)

> Super handy JavaScript utility functions for front-end development. 📦

**Note:** This is a work in progress and as such is not well documented or
ready-to-use.

## 🔧 Install

```sh
$ npm install @mrolaolu/helpers --save
```

## ⚒ Usage

Let's say you want to use the `getFormFields` helper...

```js
import { getFormFields } from '@mrolaolu/helpers'
```

or ...

```js
import getFormFields from '@mrolaolu/helpers/es/getFormFields'
```

```js
getFormFields(document.getElementById('form'))
// => { email: hello@test.io, password: Unicorns!, ... }
```

<!-- {p: style='display:none'} -->

> MIT © [olaolu.me](https://olaolu.me) &nbsp;&middot;&nbsp; GitHub
> [@whizkydee](https://github.com/whizkydee) &nbsp;&middot;&nbsp; Twitter
> [@mrolaolu](https://twitter.com/mrolaolu)

<!-- {blockquote: style='display:none'} -->
