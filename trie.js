/*
 * This module serves 2 primary functions
 *
 * create()
 * takes a dictionary
 * returns trie data structure
 *
 * check()
 * takes a trie and a query
 * returns a result from querying the trie
 *
 * you should not alter the arguments for create or check
 * you may create any helper functions that you might need
 *
 */

/*
 * Write an algorithm that builds a trie structure from a dictionary
 *   during development, use `npm run test:create`
 *   it may be more convenient to use nodemon `npx nodemon test/create`
 *
 * parameters:
 *   @dictionary   an object containing words and definitions
 *                 see ./test/sample-dictionary.json as a reference
 * returns:
 *   An object containing all words from given dictionary
 *   stored in a Trie structure that is compatible with check()
 */
const create = dictionary => {

  return {};
}

/*
 * Write an algorithm that checks a trie for a query
 *   during development, use `npm run test:check`
 *   it may be more convenient to use nodemon `npx nodemon test/check`
 *
 * parameters:
 *   @trie         a Trie structure containing all words in a dictionary
 *                 see ./test/sample-trie.json for the object shape
 *
 *   @query        a String input to check the trie for existing nodes
 *
 * returns:
 *   @result that is one of:
 *
 *   node value    the value of a node if the trie contains the query in either a branch or a leaf node
 *   true          if the trie contains the query in a branch and is not a leaf node (does not have a value)
 *   false         if the trie does not contain the query in either a branch or a leaf node
 *
 * @result if query found a leaf node that is not a branch
 *   { ...the data stored in this node }
 *
 * @result if query found a leaf node that is also a branch
 *   { ...the data stored in this node }
 *
 * @result if query found a branch that is not a leaf node
 *   true
 *
 * @result if query did not find a leaf node or branch
 *   false
 *
 */
const check = ( trie, query ) => {

  return {};
}

module.exports = {
  create,
  check,
};
