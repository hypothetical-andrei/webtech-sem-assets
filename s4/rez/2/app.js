import fs from 'fs'
import { rimrafSync } from 'rimraf'

try {
  rimrafSync('./temp')
  fs.mkdirSync('temp')
  fs.writeFileSync('./temp/tempfile', 'some data')
} catch (e) {
  console.warn(e)
}