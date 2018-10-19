#!/usr/bin/env node

const dictionaryStream = require('fs')
  .createReadStream('./dictionary.json.gz')
  .pipe( require('zlib').createGunzip() );

let dictionaryStr = '';

dictionaryStream.on('data', (chunk) => dictionaryStr += chunk);
dictionaryStream.on('end', () => {
  const dictionary = JSON.parse(dictionaryStr);
  const allTerms = Object.keys(dictionary);
  console.log(
    JSON.stringify(
      dictionary[allTerms[Math.floor(Math.random()*allTerms.length)]],
      null,
      2
    )
  );
})
