const http = require('http');

import { addBookkeeping } from './controller/bookkeeping/bookkeeping'
import { getStatistics } from './controller/statistics/statistics'

const server = http.createServer();

const urlObj = {
  '/statistics/getInfo': addBookkeeping,
  '/bookkeeping/add': getStatistics
};

function switchUrl(url) {
  return urlObj[url];
}






server.on('request', function (request, response) {
  const requestUrl = request.url;
  console.log(switchUrl(requestUrl));
  console.log('--------');

  response.end();
});

server.listen(3000, function () {
  console.log('--- begin---');
})
