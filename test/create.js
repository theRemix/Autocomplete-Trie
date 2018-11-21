const { deepStrictEqual } = require('assert');
const { create } = require('../trie');
const sampleDictionary = require('./sample-dictionary');
const sampleTrie = require('./sample-trie');

const trie = JSON.parse(JSON.stringify(create(sampleDictionary)));

console.log( JSON.stringify(trie, null, 2) );

deepStrictEqual( sampleTrie, trie, "\n\tTrie.create(dictionary) does not match ./sample-trie.json\n\tTrie again!\n" );
