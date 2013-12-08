/*global describe, it */
'use strict';
(function () {
    describe('Main view', function () {
        describe('IS it loaded, more of a test on my ', function () {
            it('should have Ext and main loaded', function () {
                chai.assert.ok(Ext);
                var main = Ext.create('TEST.view.Main');
                chai.assert.ok(main);
                chai.assert.ok(main.isXType('main'));
                chai.assert.ok(main.isXType('tabpanel'));
                chai.assert.equal(main.getTabBarPosition(), 'bottom');
            });
        });
    });
})();
