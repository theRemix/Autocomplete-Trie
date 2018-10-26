const { check } = require('../trie');
const sampleDictionary = require('./sample-dictionary');

const response = check(sampleDictionary);
console.log({ response });



