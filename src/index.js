(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.zipObject = function (inSource, inTarget) {
    var result = {}
    inSource.forEach(function (value, index){
      nx.set(result, value, inTarget[index])
    });
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.zipObject;
  }
})();
