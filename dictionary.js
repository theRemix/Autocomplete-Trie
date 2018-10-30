const dictionaryStream = require('fs')
  .createReadStream('./data/dictionary.json.gz')
  .pipe( require('zlib').createGunzip() );

module.exports = () => new Promise((resolve, reject) => {
  let dictionaryStr = '';
  dictionaryStream.on('data', (chunk) => dictionaryStr += chunk);
  dictionaryStream.on('end', () =>
    resolve(JSON.parse(dictionaryStr))
  );
});
