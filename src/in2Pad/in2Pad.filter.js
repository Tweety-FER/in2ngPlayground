(function () {
    'use strict';

    angular.module('in2.playground.pad', ['in2.playground.pad.controller'])
        .filter('in2Pad', Pad);

    Pad.$inject = [];

    // in2Pad is a filter that applies padding to an input string based on two arguments:
    // - Minimum length to pad to (mandatory)
    // - Padding character (optional, defaults to '0')
    // filter adds padding characters to the start of the string until the string has size of at least Minimum length argument number
    function Pad() {
        return pad;

        // function that makes sure all input agruments are defined correctly, and then proceeds to call function that adds character padding
        function pad(inputText, minimumPaddedTextLength, paddingCharacter) {
            var paddedText = inputText;
            var minimumLength = minimumPaddedTextLength;
            var padCharacter = "0";

            if (typeof minimumLength === 'undefined')  // check if padding character is defined
            {
                throw 'Invalid input - padLength must be defined!';
            }

            if (typeof paddingCharacter !== 'undefined')  // check if padding character is defined
            {
                padCharacter = paddingCharacter; // set padding character to input argument, or default it to '0' if agrument is undefined
            }

            if (!angular.isString(padCharacter) || padCharacter.length !== 1) { // check for correct input for padding character
                throw 'Invalid input - \'' + padCharacter + '\' is not a single character';  // throw exception if padding character is not a single character
            }

            paddedText = applyPadding('' + paddedText, minimumLength, padCharacter); // call function for character padding

            return paddedText;
        };

        // function that adds padding characters at the beginning of the input string until string reaches minimum length
        function applyPadding(inputText, minimumLength, paddingCharacter) {
            var paddedText = inputText;
            var paddedTextLength = paddedText.length;

            if (paddedText.length >= minimumLength)
                return paddedText;  //  if string is already longer than minimum length, return unchanged string
            else {
                for (var i = 0; i < minimumLength - paddedTextLength; i++) {
                    paddedText = paddingCharacter + paddedText;  //  add a single character to the start of the string, repeating this until string reaches minimum length
                };
                return paddedText;  // return padded string
            }
        };
    };
})();