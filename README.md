# Morsefy
Pure JS/NodeJS plugin to encode and decode Morse.

### Installing
``npm install morsefy``

``bower install morsefy``

``npm install -g morsefy`` to install as a command line application


### Usage

``<script src="bower_components/morsefy.js"></script>``

``<script>document.write(Morsefy.decode('-- --- .-. ... . ..-. -.--'));</script>``

``// Morsefy``

``<script>document.write(Morsefy.encode('Morsefy'));</script>``

``// -- --- .-. ... . ..-. -.--``
#### Node Module

##### Setup
``var morsefy = require('morsefy');``

##### Encoding

``var morse = morsefy.encode('Hello World.');``

##### Decoding

``var msg = morsefy.decode('.... . .-.. .-.. --- / .-- --- .-. .-.. -..');``

#### Command line
  ``morsefy [options]``

``-h, --help     output usage information``

``-V, --version  output the version number``

``--save <path>  Save output to a textfile``

``decode [text]  Decode a morse to text``

``encode [text]  Encode a text to morse``

##### Example

``morsefy encode 'Hello World' --save output.txt``

### Testing

``npm test``
