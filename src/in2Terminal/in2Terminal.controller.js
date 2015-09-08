(function() {
    'use strict';

    angular
        .module('in2.playground.terminal.controller', [])
        .controller('in2TerminalController', TerminalController);

    function TerminalController(){
        var vm = this;
		
		vm.userName = vm.user || 'user';  //if user parameter is not set use default username
		vm.machineName = vm.machine || 'machine';  //if machine parameter is not set use default machine name
		vm.commandHistory = [];  //array of strings representing commands
		vm.promptPrefix = vm.userName + '@' + vm.machineName + '$ ';  //displayed before each command
		
		vm.keypress = keypress;
		
        function keypress(event) {
			//if enter key was pressed
			if (event.keyCode == 13){
				vm.commandHistory.push(vm.command);  //add a command (value of input field) to the command history
				vm.command = '';  //set value of the command input field to blank
			}
        }
    }
})();