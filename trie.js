/*
 * This module serves two purposes
 *
 * On server start
 *   - reads ./data/dictionary.json
 *   - creates a trie data structure
 *      - see create()
 *
 * On api request
 *   - GET /api/check-term?q=fluo
 *   - return one of the following values
 *     - TRIE.NULL
 *     - TRIE.BRANCH
 *     - TRIE.LEAF
 *   - see check()
 */

const create = dictionary => {

}

const check = query => {

  return {};
}

module.exports = {
  create,
  check,
};
