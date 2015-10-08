var morse = {
    "a" :  ".-",
    "b" :  "-...",
    "c" :  "-.-.",
    "d" :  "-..",
    "e" :  ".",
    "f" :  "..-.",
    "g" :  "--.",
    "h" :  "....",
    "i" :  "..",
    "j" :  ".---",
    "k" :  "-.-",
    "l" :  ".-..",
    "m" :  "--",
    "n" :  "-.",
    "o" :  "---",
    "p" :  ".--.",
    "q" :  "--.-",
    "r" :  ".-.",
    "s" :  "...",
    "t" :  "-",
    "u" :  "..-",
    "v" :  "...-",
    "w" :  ".--",
    "x" :  "-..-",
    "y" :  "-.--",
    "z" :  "--..",
    "1" :  ".----",
    "2" :  "..---",
    "3" :  "...--",
    "4" :  "....-",
    "5" :  ".....",
    "6" :  "-....",
    "7" :  "--...",
    "8" :  "---..",
    "9" :  "----.",
    "0" :  "-----",
    " " :  "/"
};

function Morsefy(){
    return this;
}

Morsefy.prototype = {
    encode: function(str) {
        var encoding = "";

        for (var i=0; i<str.length; i++) {
            var char = str.charAt(i).toLowerCase();
            if (morse[char]) {
                encoding += morse[char];
                encoding += " ";
            }
        }

        return encoding.trim();
    },

    decode: function(str) {
        var decoding = "";
        var words = str.split("/");

        for (var i=0; i<words.length; i++) {
            var character = words[i].split(" ");
            for (var j=0; j<character.length; j++) {
                for (var code in morse) {
                    if (morse[code] == character[j]) {
                        decoding += code;
                    }
                }
            }
            decoding += " ";
        }
        return decoding.trim();
    }

};

module.exports = new Morsefy();
