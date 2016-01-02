var staticModule = require('static-module');
var jsesc = require('jsesc');

module.exports = function () {
  return staticModule({
    inline: function (cb) {
      return 'JSON.parse("' + jsesc(JSON.stringify(cb(require)), {
        quotes: 'double'
      }) + '")';
    }
  });
};
