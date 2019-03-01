'use strict';

var rpgcore = module.exports;

// module information
rpgcore.version = 'v' + require('./package.json').version;
rpgcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of rpgcore-lib found. ' +
      'Please make sure to require rpgcore-lib and check that submodules do' +
      ' not also include their own rpgcore-lib dependency.';
    throw new Error(message);
  }
};
rpgcore.versionGuard(global._rpgcore);
global._rpgcore = rpgcore.version;

// crypto
rpgcore.crypto = {};
rpgcore.crypto.BN = require('./lib/crypto/bn');
rpgcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
rpgcore.crypto.Hash = require('./lib/crypto/hash');
rpgcore.crypto.Random = require('./lib/crypto/random');
rpgcore.crypto.Point = require('./lib/crypto/point');
rpgcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
rpgcore.encoding = {};
rpgcore.encoding.Base58 = require('./lib/encoding/base58');
rpgcore.encoding.Base58Check = require('./lib/encoding/base58check');
rpgcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
rpgcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
rpgcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
rpgcore.util = {};
rpgcore.util.buffer = require('./lib/util/buffer');
rpgcore.util.js = require('./lib/util/js');
rpgcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
rpgcore.errors = require('./lib/errors');

// main rpgcoin library
rpgcore.Address = require('./lib/address');
rpgcore.Block = require('./lib/block');
rpgcore.MerkleBlock = require('./lib/block/merkleblock');
rpgcore.BlockHeader = require('./lib/block/blockheader');
rpgcore.HDPrivateKey = require('./lib/hdprivatekey.js');
rpgcore.HDPublicKey = require('./lib/hdpublickey.js');
rpgcore.Networks = require('./lib/networks');
rpgcore.Opcode = require('./lib/opcode');
rpgcore.PrivateKey = require('./lib/privatekey');
rpgcore.PublicKey = require('./lib/publickey');
rpgcore.Script = require('./lib/script');
rpgcore.Transaction = require('./lib/transaction');
rpgcore.URI = require('./lib/uri');
rpgcore.Unit = require('./lib/unit');

// dependencies, subject to change
rpgcore.deps = {};
rpgcore.deps.bnjs = require('bn.js');
rpgcore.deps.bs58 = require('bs58');
rpgcore.deps.Buffer = Buffer;
rpgcore.deps.elliptic = require('elliptic');
rpgcore.deps.nodeX21s = require('node-x21s');
rpgcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
rpgcore.Transaction.sighash = require('./lib/transaction/sighash');
