#!/usr/bin/env node

(Readable => new Readable({
  read(size) {
    this.push(
      JSON.stringify(
        "abcdefghijklmnopqrstuvwxyz"
        .split('')
        .map(letter => require(`./${letter}.json`))
        .reduce((all, words) => ({
          ...all,
          ...words
        }), {}))
    );
    this.push(null);
  }})
)(require('stream').Readable)
.pipe( require('zlib').createGzip() )
.pipe( require('fs').createWriteStream('./dictionary.json.gz') )
