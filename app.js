#!/usr/bin/env node

var morse = require('./morsefy').create();
var program = require('commander');
var path = require('path');
var fs = require('fs');

program
  .version('0.0.6')
  .option('--save <path>', 'Save output to a textfile')
  .option('decode [text]', 'Decode a morse to text')
  .option('encode [text]', 'Encode a text to morse')
  .parse(process.argv);

if (!program.decode && !program.encode) {
  program.help();
}

if (program.decode) {
  var text = program.decode;
  var morseMsg = morse.decode(text);
  console.log(morseMsg);
  if (program.save) {
    fs.writeFile(path.normalize(program.save), morseMsg, function() {
      console.log('Saved to: ' + path.normalize(program.save));
    });
  }
}
else if(program.encode) {
  var text = program.encode;
  var morseMsg = morse.encode(text);
  console.log(morseMsg);
  if (program.save) {
    console.log(path.normalize(program.save));
    fs.writeFile(path.normalize(program.save), morseMsg, function() {
      console.log('Saved to: ' + path.normalize(program.save));
    });
  }
}
