(function () {
    'use strict';

    angular.module('in2.playground.formatting', ['in2.playground.formatting.controller'])
        .factory('in2Formatting', format);

    format.$inject = [];

    // factory in2Formatting takes an input string and returns formatted string in which the special 
    // characters are replaced by html tags in the following way:
    //  ->  **some content** is replaced by <b>some content</b>
    //  ->   *some content*  is replaced by <i>some content</i>
    //  ->   #some content#  is replaced by <code>some content</code>
    // special characters must be in pairs with some content in between them, single characters will not be replaced
    function format() {
        return format;       
        
        // format function, checks input text for bold, italic and code special characters
        function format(text) {
            var formattedText = text;

            if (!angular.isString(text)) {
                throw 'Invalid data type: ' + (typeof text) + ', expected string!';
            }

            formattedText = checkForBold(formattedText);
            formattedText = checkForItalic(formattedText);
            formattedText = checkForCode(formattedText);

            return formattedText;
        };

        // function that checks input string for all instances of **some content** patterns
        // for each found instance, another function that replaces pattern with <b>some content</b> is called
        function checkForBold(text) {
            var formattedText = text;
            var formatStartPosition = -1;
            var formatEndPosition = -1;            
            
            for (var i = 0; i < formattedText.length; i++) {
                if (formattedText[i] === '*' && formattedText[i + 1] === '*' && formatStartPosition === -1) {
                    formatStartPosition = i;
                    i += 2;     // skip **
                }
                if (formattedText[i] === '*' && formattedText[i + 1] === '*' && formatStartPosition !== -1 && formatEndPosition === -1 && i !== formatStartPosition + 2) {
                    formatEndPosition = i;
                    i += 2;      // skip **
                    formattedText = replaceBold(formattedText, formatStartPosition, formatEndPosition); // call function that replaces special pattern
                    formatStartPosition = -1;
                    formatEndPosition = -1;
                }
            }            
            return formattedText;
        };

        // function that replaces one instance of **some content** with <b>some content</b>
        // startPosition and endPosition are positions in an input text where ** start and end
        function replaceBold(text, startPosition, endPosition) {
            var formattedText = text;

            formattedText = formattedText.substr(0, startPosition) + "<b>" + formattedText.substr(startPosition + 2, endPosition - startPosition - 2) +
            "</b>" + formattedText.substr(endPosition + 2, text.length - endPosition + 2);

            return formattedText;
        };


        // function that checks input string for all instances of *some content* patterns
        // for each found instance, another function that replaces pattern with <i>some content</i> is called
        function checkForItalic(text) {
            var formattedText = text;
            var formatStartPosition = -1;
            var formatEndPosition = -1;
            
            for (var i = 0; i < formattedText.length; i++) {
                if (formattedText[i] === '*' && formatStartPosition === -1) {
                    formatStartPosition = i;
                    i += 1;     // skip *
                }
                if (formattedText[i] === '*' && formatStartPosition !== -1 && formatEndPosition === -1 && i !== formatStartPosition + 1) {
                    formatEndPosition = i;
                    i += 1;     // skip *
                    formattedText = replaceItalic(formattedText, formatStartPosition, formatEndPosition);    // call function that replaces special pattern
                    formatStartPosition = -1;
                    formatEndPosition = -1;
                }
            }            
            return formattedText;
        };

        // function that replaces one instance of *some content* with <i>some content</i>
        // startPosition and endPosition are positions in an input text where * start and end
        function replaceItalic(text, startPosition, endPosition) {
            var formattedText = text;

            formattedText = formattedText.substr(0, startPosition) + "<i>" + formattedText.substr(startPosition + 1, endPosition - startPosition - 1) +
            "</i>" + formattedText.substr(endPosition + 1, text.length - endPosition + 1);

            return formattedText;
        };

        // function that checks input string for all instances of #some content# patterns
        // for each found instance, another function that replaces pattern with <#>some content</#> is called
        function checkForCode(text) {
            var formattedText = text;
            var formatStartPosition = -1;
            var formatEndPosition = -1;
            
            for (var i = 0; i < formattedText.length; i++) {
                if (formattedText[i] === '#' && formatStartPosition === -1) {
                    formatStartPosition = i;
                    i += 1;     // skip #
                }
                if (formattedText[i] === '#' && formatStartPosition !== -1 && formatEndPosition === -1 && i !== formatStartPosition + 1) {
                    formatEndPosition = i;
                    i += 1;     // skip #
                    formattedText = replaceCode(formattedText, formatStartPosition, formatEndPosition);
                    formatStartPosition = -1;
                    formatEndPosition = -1;
                }
            }            
            return formattedText;
        };

        // function that replaces one instance of #some content# with <code>some content</code>
        // startPosition and endPosition are positions in an input text where # start and end
        function replaceCode(text, startPosition, endPosition) {
            var formattedText = text;

            formattedText = formattedText.substr(0, startPosition) + "<code>" + formattedText.substr(startPosition + 1, endPosition - startPosition - 1) +
            "</code>" + formattedText.substr(endPosition + 1, text.length - endPosition + 1);

            return formattedText;
        };
    }
})();