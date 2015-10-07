var assert = require("assert");
var morsefy = require('../morsefy');

describe('Morsefy', function() {

	it('should have a Morse code for all digits', function() {
		for (var i = 0; i < 10; i++) {
			assert.notStrictEqual(morsefy.encode(i + ""), null);
			assert.notEqual(morsefy.encode(i + ""), "");
		}
	});

	it('should have a Morse code for all characters', function() {
		for (i = 97; i < 123; i++) {
			assert.notStrictEqual(morsefy.encode(String.fromCharCode(i)), null);
			assert.notEqual(morsefy.encode(String.fromCharCode(i)), "");
		}
	});

	it('should have encodings that match decodings for all digits', function() {
		for (var i = 0; i < 10; i++) {
			var encoding = morsefy.encode(i + "");
			assert.equal(morsefy.decode(encoding), i + "");
		}
	});

	it('should have encodings that match decodings for all characters', function() {
		for (var i = 97; i < 123; i++) {
			var encoding = morsefy.encode(String.fromCharCode(i));
			assert.equal(morsefy.decode(encoding), String.fromCharCode(i));
		}
	});
  
  	it('should correctly encode the characters: SOS', function() {
  		assert.equal(morsefy.encode("SOS"), "... --- ...");
  	});

  	it('should correctly decode the Morse code: ... --- ...', function() {
  		assert.equal(morsefy.decode("... --- ...").toUpperCase(), "SOS");
  	});

});
