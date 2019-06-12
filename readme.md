# [@mrolaolu/helpers](https://npm.im/@mrolaolu/helpers)

> Super-handy JavaScript utility functions for front-end development. 📦

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
import getFormFields from '@mrolaolu/helpers/getFormFields'
```

```js
getFormFields(document.getElementById('form'))
// => { $fields: Array, email: hello@olaolu.me, password: Unicorns!, ... }
```

>More Examples

```js
import { strictTypeOf, toAmountString } from '@mrolaolu/helpers'
```

```js
strictTypeOf(document.getElementById('form'), 'domelement')
// => true

strictTypeOf(false, 'boolean')
// => true

strictTypeOf(null, ['undefined', 'null'])
// => true

strictTypeOf("hello!", ['date'])
// => false

strictTypeOf({}, ['object', 'array'])
// => true

toAmountString(250000)
// => '250,000'
```

<!-- {p: style='display:none'} -->

> MIT © [olaolu.me](https://olaolu.me) &nbsp;&middot;&nbsp; GitHub
> [@whizkydee](https://github.com/whizkydee) &nbsp;&middot;&nbsp; Twitter
> [@mrolaolu](https://twitter.com/mrolaolu)

<!-- {blockquote: style='display:none'} -->
