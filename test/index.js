/*
 * runs both ./test/create
 * and ./test/check
 */

try{
  console.log('================= trie.create =================');
  require('./create');
  console.log('================= trie.check  =================');
  require('./check');
  console.log('================= trie tests =================');
  console.log('Trie is OK!');
}catch(error){
  throw error;
}
