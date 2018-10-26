/*
 * This module serves two purposes
 *
 * On server start
 *   - reads ./data/dictionary.json
 *   - create() returns trie data structure
 *
 * On api request
 *   - check() provides a response for api calls
 */

/*
 * Write an algorithm that builds a trie structure from a dictionary
 *   during development, use `npm run test:create`
 *
 * parameters:
 *   @dictionary   an object containing words and definitions
 *                 see ./test/sample-dictionary.json for the object shape
 * returns:
 *   An object containing all words from given dictionary
 *   in a Trie structure that check() can operate on
 */
const create = dictionary => {

  return {};
}

/*
 * Write an algorithm that checks a trie for a query
 *   during development, use `npm run test:check`
 *
 * parameters:
 *   @trie         an Trie structure containing all words in a dictionary
 *                 see ./test/sample-trie.json for the object shape
 *
 *   @query        an String input to check the trie for existing nodes
 *
 * returns:
 *   @result       if the trie contains the query in either a branch or a leaf node
 *   null          if the trie does not contain the query in either a branch or a leaf node
 *
 * @result
 *   {
 *     value    : null | Object
 *     children : Object
 *   }
 *
 * @result if query found a leaf node that is not a branch
 *   {
 *     value : { ...the data stored in this node }
 *     children : {}
 *   }
 *
 * @result if query found a leaf node that is also a branch
 *   {
 *     value : { ...the data stored in this node }
 *     children : {
 *       [child key] : @result,
 *       ...
 *     }
 *   }
 *
 * @result if query found a branch that is not a leaf node
 *   {
 *     value : null
 *     children : {
 *       [child key] : @result,
 *       ...
 *     }
 *   }
 *
 * @result if query did not find a leaf node or branch
 *   {
 *     node : null
 *     children : {}
 *   }
 *
 */
const check = ( trie, query ) => {

  return {};
}

module.exports = {
  create,
  check,
};
