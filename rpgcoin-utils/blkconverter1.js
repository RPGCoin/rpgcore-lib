'use strict';

// execution
// enable rest in rpg.conf 'rest=1' (be sure to disable after)
// node ./rpgcoin-utils/blkconverter1.js

// convert block json from rpgd format to rpgcore format

// get ./rpgcoin-utils/inputs/blk220909.dat by:
// curl 127.0.0.1:8766/rest/block/00000058bcc33dea08b53691edb9e49a9eb8bac36a0db17eb5a7588860b1f590.hex | xxd -r -p > ./rpgcoin-utils/inputs/blk1.dat

// get ./rpgcoin-utils/inputs/blk220909.json by
// curl 127.0.0.1:8766/rest/block/00000058bcc33dea08b53691edb9e49a9eb8bac36a0db17eb5a7588860b1f590.json > ./rpgcoin-utils/inputs/blk1.json

// get ./rpgcoin-utils/inputs/blk1.js by manually edit the file

// Manually check if blk1-rpgcore.json match with blk1.json

var rpgcore = require('..');
var Block = rpgcore.Block;
var fs = require('fs');

var first8Bytes = new Buffer ([0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF]); // won't be used in block allocation, just fill with some inane values

var blockBuffer = fs.readFileSync('rpgcoin-utils/inputs/blk1.dat');

var rpgcoreFormatBlockBuffer = Buffer.concat([first8Bytes, blockBuffer]);

var blk = Block.fromRawBlock(rpgcoreFormatBlockBuffer);

var blkJSON = blk.toJSON();
var blkJSONStr = JSON.stringify(blkJSON, null, 2);

fs.writeFileSync('rpgcoin-utils/outputs/blk1-rpgcore.dat', rpgcoreFormatBlockBuffer);
fs.writeFileSync('rpgcoin-utils/outputs/blk1-rpgcore.json', blkJSONStr);
