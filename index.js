let { readFileSync } = require('fs')
let acorn = require('acorn')
let opts = { ecmaVersion: 'latest' }

/**
 * Works
 */
let works = readFileSync('./works.js').toString()
// Parse
let parsed = acorn.parse(works, opts)
console.log(parsed)
// Tokenize
let tokens = acorn.tokenizer(works, opts)
console.log(tokens)
// Spread
let copy = [...tokens]
console.log(copy)

/**
 * Fails
 */
let fails = readFileSync('./fails.js').toString()
// Parse
parsed = acorn.parse(fails, opts)
console.log(parsed)
// Tokenize
tokens = acorn.tokenizer(fails, opts)
console.log(tokens)
// Spread
copy = [...tokens]
console.log(copy)
