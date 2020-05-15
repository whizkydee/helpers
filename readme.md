# [@mrolaolu/helpers](https://npm.im/@mrolaolu/helpers)

🛠 Super handy JavaScript utilities for frontend development.

**Note:** This is a work in progress and as such is not well documented or
ready-to-use.

## Install

```sh
$ npm install @mrolaolu/helpers --save
```

## Usage

Let's say you want to use the `getFormFields` helper...

```ts
import { getFormFields } from '@mrolaolu/helpers'
```

or ...

```ts
import getFormFields from '@mrolaolu/helpers/dist/esm/getFormFields'
```

```ts
const formFields = getFormFields(
  document.getElementById('form') as HTMLFormElement
)
// => { email: hello@test.io, password: Unicorns!, ... }
```

<!-- {p: style='display:none'} -->

> MIT © [olaolu.dev](https://olaolu.dev) &nbsp;&middot;&nbsp; GitHub
> [@whizkydee](https://github.com/whizkydee) &nbsp;&middot;&nbsp; Twitter
> [@mrolaolu](https://twitter.com/mrolaolu)

<!-- {blockquote: style='display:none'} -->
