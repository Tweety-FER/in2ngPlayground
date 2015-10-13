(function () {
    'use strict';
    angular
        .module('in2.playground.rpn.service', ['in2.playground.rpn.controller'])
        .factory('rpn', rpn);

    function rpn() {
        return rpn;
        /*function isPositiveInteger(input) {
            var n =Math.trunc(Number(input));
            if ((String(n) === input) && (n > 0)  )
                return true;
            else
                return false;
        }
        */
        function rpn(str){
            var operations = [];
            var nums = [];
            var output = "";
            var operators = ["+","-","*","/","%"];
            var res = str.split(/\s+/);
            var index;
            // classify elements of input string as numbers or operators
            for(index in res){
                // classified operators have to be contained in an array 'operators'
                if (operators.indexOf(res[index]) !=-1) {
                    operations.push(res[index]);
                }
                // classified numbers have to be positive integers
               // if (angular.isNumber(res[index])) {
                    //if (isPositiveInteger(res[index])) {
               else if (res[index]>0){
                   //  if ((angular.isNumber(Number(res[index]))) && (Math.trunc(Number(res[index])===Number(res[index])) {
                            nums.push(res[index]);
                    // }
                    }

                  /* else
                   {
                         throw 'Invalid data type for number, positive integer expected.';
                    }

                    */


              else
                {
                 throw 'Invalid expression, positive integers or mathematical operators expected';
                }


            }
           //throw exception for invalid format of input string, e.g. '5 5 5 +'
          /*  if ((nums.length-operations.length)!=1)  {
                   throw 'Invalid format of input string.';

            }
           */
            while(nums.length>1) {

                if (operations[0]=="/") {
                     nums.unshift(Math.floor(eval(nums.shift() + operations.shift()+ nums.shift())));

                }
                else {
                    output+=nums.shift();
                    output+=operations.shift();
                }

            }
            if (nums.length>=1) {
                output+=nums.shift();
            }

            return eval(output);

        };

};
})
();