const { create } = require('../trie');
const sampleDictionary = require('./sample-dictionary');

const trie = create(sampleDictionary);
console.log({ trie });


