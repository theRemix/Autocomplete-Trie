const { deepStrictEqual } = require('assert');
const { create, check } = require('../trie');
const sampleDictionary = require('./sample-dictionary');

const trie = create(sampleDictionary);

const cat = check(trie, 'cat');
const cater = check(trie, 'cater');
const dog = check(trie, 'dog');
const ca = check(trie, 'ca');
const bird = check(trie, 'bird');

const actual = {
  cat,
  cater,
  dog,
  ca,
  bird
};

const expected = {
  "cat": {
    "definition": "definition for cat"
  },
  "cater": {
    "definition": "definition for cater"
  },
  "dog": {
    "definition": "definition for dog"
  },
  "ca": true,
  "bird": false,
};

console.log(JSON.stringify(actual, null, 2));

Object.keys(expected).forEach(test =>
  deepStrictEqual( expected[test], actual[test], `\n\tTrie.check(trie, ${test}) failed to match.

\t\tExpected: ${JSON.stringify(expected[test])}
\t\tActual: ${JSON.stringify(actual[test])}

\tTrie again!\n`)
)
