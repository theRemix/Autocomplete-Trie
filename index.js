const fs = require('fs');
const http = require('http');
const { join } = require('path');
const { loadData, apiHandler } = require('./api');
const apiMountpath = '/api/';
const staticDir = './static';
const PORT = process.env.PORT || 3000;

const staticHandler = (req, res) => {
  const path = join(staticDir, req.url === '/' ? '/index.html' : req.url);

  const file = fs.createReadStream(path);
  file.pipe(res);
  file.on('error', err => {
    if( err.code === 'ENOENT' ) return res.end('404');
    return res.end(err);
  });
}

const requestHandler = (req, res) => (req.url.startsWith(apiMountpath) ? apiHandler(apiMountpath) : staticHandler)(req, res);

(async () => {
  await loadData();

  http.createServer(requestHandler).listen(PORT, (err) => {
    if (err) return console.log(err)

    console.log(`Server is listening on ${PORT}`);
  });

})();
