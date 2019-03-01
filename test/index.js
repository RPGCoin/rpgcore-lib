'use strict';

var should = require('chai').should();
var rpgcore = require('../');

describe('#versionGuard', function() {
  it('global._rpgcore should be defined', function() {
    should.equal(global._rpgcore, rpgcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      rpgcore.versionGuard('version');
    }).should.throw('More than one instance of rpgcore');
  });
});
