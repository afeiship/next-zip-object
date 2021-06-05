(function () {
  require('../src');

  describe('api.basic test', () => {
    test('zip shadow object', function () {
      var ar1 = ['a', 'b'];
      var ar2 = [1, 2];
      var res = nx.zipObject(ar1, ar2);
      expect(res).toEqual({ a: 1, b: 2 });
    });

    test('zip deep object', function () {
      var ar1 = ['a.c', 'b[0].e'];
      var ar2 = [1, 2];
      var res = nx.zipObject(ar1, ar2);
      expect(res).toEqual({ a: { c: 1 }, b0: { e: 2 } });
    });
  });
})();
