(function() {
	'use strict';

	angular
		.module('in2.playground.cypher.filter', [])
		.filter('cypher', cypher);

    function cypher() {
        return cypher;
        function caesar(input, shift){
            var output="";
        	for(var i=0; i< input.length; i++){
                // apply a Caesar cypher only to characters of the English alphabet
                if (((input.charCodeAt(i)>64) && (input.charCodeAt(i)<90) )||((input.charCodeAt(i)>96) && (input.charCodeAt(i)<123) )) {

                    var code =0;
                    var overflow = 0;
					code = input.charCodeAt(i)+shift;
                    //[a-z]
				    if ((input.charCodeAt(i)>96) && (input.charCodeAt(i)<123)) {
				        //in case of overflow, a character code should be adjusted/corrected
                        //upper overflow
					    if (code>122) {
  						    overflow = code - 122;
  							code = code - 26 +overflow +1;
  						}
                        //low overflow
						else if (code<97){
						    overflow = 97-code;
							code = code + 26 - overflow +1;

						}
                    }

                    ////[A-Z]
			        if((input.charCodeAt(i)>64) && (input.charCodeAt(i)<91)) {
			            //low overflow
 				        if (code<65) {
					        overflow = 65-code;
						    code = code + 26 -overflow +1;
					    }
                        //upper overflow
					    else if (code>90) {
						    overflow = code-90;
							code = code - 26 + overflow +1;
						}
					}

                    output+= String.fromCharCode(code);
                }

                //all other non-english characters are copied
                else {
                    output+=String.fromCharCode(input.charCodeAt(i));

                }

            }
            return output;
        }

        function cypher(input, shift){


            //throw exception for invalid input
            if (!angular.isString(input)){
                throw 'Invalid data type for input: ' + typeof(input) + ', string expected.';
            }
            //define default value for shift
            if (angular.isUndefined(shift)){
                shift = 1;
            }
            //throw exception for invalid shift
            if (!angular.isNumber(shift)){
                throw 'Input shift is not in correct format, number expected.';
            }

            //call caesar function
            var output= caesar(input, shift);


            return output;
        };

    };
})
();