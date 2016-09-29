var rp = require('request-promise');
var notification = require('./notifications');

var times = 0;
var errors = 0;
var lastError;

function watch() {
  times++;

  return rp({
      uri: 'http://www.istocknow.com/live/live.php?type=7&operator=&color=Black&model=&ajax=1&nocache=1474979096196&nobb=false&notarget=false&noradioshack=false&nostock=false',
      json: true
    }).then(processResponse)
    .catch(function(err) {
      errors++;
      lastError = err;
    });
}

function processResponse(response) {
  var stores = [
    response.dataz['14761'],
    response.dataz['14762'],
    response.dataz['14763']
  ];
  stores.forEach(function(item) {
    if (item.live === '0') {
      alert(item);
    }
  });
}

function alert(item) {

}

function report() {
  console.log('Watched ')
}

module.exports = {
  watch: watch,
  report: report
};
