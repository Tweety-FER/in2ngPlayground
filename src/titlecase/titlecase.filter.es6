(function() {
  'use strict';
  
  angular.module('in2.playground.titlecase', [])
         .filter('in2TitleCase', TitleCase);
         
  
  TitleCase.$inject = [];
  
  function TitleCase() {
    /**
    * Constructs and returns a filter which takes a string and transforms its words to title case.
    * An optional second argument can be provided. All words in that dictionary, if any, are lowercased
    * instead of titlecased.
    *
    * @param value : string - String to titlecase (word-based titlecase)
    * @param notCapitalisedList : [string] - Optional list of string to lowercase instead of titlecase
    * @return - Given string, only with words transformed to titlecase
    */
    return function(value, notCapitalisedList) {
      let words = value.split(' ');
      let processed = []; //A list of processed words

      //If a list was given, lowercase its word for easier comparison. Default to empty list of words.
      notCapitalisedList = !!notCapitalisedList ? notCapitalisedList.map((v) => v.toLowerCase()) : [];
      
      //Use angular's forEach function for easy iteration
      angular.forEach(words, (word) => { //ES6 function declaration. Like a normal functions, only uses outside context's this variable.
        let lowerWord = word.toLowerCase();
                
        if(notCapitalisedList.indexOf(lowerWord) === -1) { //indexOf returns index of element in list or -1 if not in list
          processed.push(lowerWord[0].toUpperCase() + lowerWord.slice(1)); //Uppercase first and merge with the tail of the word
        } else {
          processed.push(lowerWord); //Is good, just push it
        }
        
      });
      
      return processed.join(' '); //Join the words back up with spaces
    };
  }
  
  
})();