const { check } = require('./trie');

const checkTerm = (req, res) => {
  const query = req.url.split('?q=')[1];
  res.end(JSON.stringify(check(query)));
}

module.exports = mountPoint => (req, res) => {
  const match = route => console.log(req.url.substr(mountPoint.length-1)) || req.url.substr(mountPoint.length-1).startsWith(route);

  switch(true) {
    case match('/check-term'): return checkTerm(req, res);
    default: res.end('404');
  }
}

