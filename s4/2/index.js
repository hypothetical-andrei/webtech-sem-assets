let crypto = require('crypto-js')

let word1 = "word1"

let encode = crypto.AES.encrypt(JSON.stringify(word1), "secret key 123").toString()

console.log(encode)

let bytes = crypto.AES.decrypt(encode, "secret key 123")

let decrypt = JSON.parse(bytes.toString(crypto.enc.Utf8))

console.log(decrypt)