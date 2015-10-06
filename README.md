# Morsefy
Simple NodeJS app to encode and decode morse codes directly from the command line.

### Installing
``npm install -g morsefy``

### Usage
  ``morsefy [options]``
  
``-h, --help     output usage information``

``-V, --version  output the version number``

``--save <path>  Save output to a textfile``

``decode [text]  Decode a morse to text``

``encode [text]  Encode a text to morse``

#### Example

``morsefy encode 'Hello World' --save output.txt``
