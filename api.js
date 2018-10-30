const unpackDictionary = require('./dictionary');
const { create, check } = require('./trie');

let dictionary, trie;

const loadData = async() => {
  console.log('Unpacking dictionary...');
  console.time('Dictionary is ready!');
  dictionary = await unpackDictionary();
  console.timeEnd('Dictionary is ready!');

  console.log('Creating Trie...');
  console.time('Trie is ready!');
  trie = create( dictionary );
  console.timeEnd('Trie is ready!');
}

/*
 * On api request
 *   - GET /api/check-term?q=fluo
 *   - returns
 *     - { value, childKeys }
 *   - see trie.check()
 */
const checkTerm = (req, res) => {
  const [ _, ...queryParams ] = req.url.split('?q=');
  const query = queryParams.join('');
  const result = query.length > 0 ? check( trie, query ) : false;

  res.end(JSON.stringify(result));
}

module.exports = {
  loadData,
  apiHandler : mountPoint => (req, res) => {
    const match = route => req.url.substr(mountPoint.length-1).startsWith(route);

    switch(true) {
      case match('/check-term'): return checkTerm(req, res);
      default: res.end('404');
    }
  }
}

