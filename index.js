/*!
 * @mrolaolu/helpers v0.1.0
 * https://github.com/whizkydee/helpers
 * (c) 2019-present Olaolu Olawuyi
 * Released under the MIT License.
 */

import { readFileSync } from 'fs'
import { join } from 'path'

const helpersPath = join(__dirname, './src')

readFileSync(helpersPath)
  .forEach(file => void (exports[file.split('.')[0]] = require(join(helpersPath, file))))
