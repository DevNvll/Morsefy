# Morsefy
Simple NodeJS module to encode and decode morse codes directly from the command line.

### Installing
``npm install morsefy``

``npm install -g morsefy`` to install as a command line application


### Usage

#### Module

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
