(function () {
    'use strict';
    angular
        .module('in2.playground.parseiso.factory', [])
        .factory('parseISO', ParseISO);

    function ParseISO(){
        
        return parseISO;

        function parseISO(dateString) {
			if (!angular.isString(dateString)){
				throw 'Invalid object, date string required.';
			}
			
			//regex used for parsing ISO dates
            var regex = /^(\d{4})(?:-(\d{2})(?:(?:-(\d{2}))(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{1,3}))?)?(?:(?:([Zz])|([+\-\s])(\d{2}):(\d{2})))?)?)?)?$/;
			
            var parts = regex.exec(dateString);
            if (parts == null){  //dateString didnt match our regular expression
                throw 'Invalid date format, ISO format required.';
            }
            
            var year = parseInt(parts[1]);
            var month = (parseInt(parts[2]) - 1) || 0;  //0-based month
            var day = parseInt(parts[3]) || 1;
            var hour = parseInt(parts[4]) || 0;
            var minute = parseInt(parts[5]) || 0;
            var second = parseInt(parts[6]) || 0;
            var milisecond = parseFloat('0.' + parts[7])*1000 || 0;  //parts[7] reprezents fractions of a second not actual miliseconds
            var timezoneOffset = 0;
			var hasZ = parts[8] == 'z' || parts[8] == 'Z';
            if (!hasZ && parts[9]){
                var timezoneSign = (parts[9] == '-') ? 1: -1;
                var timeZoneHour = parseInt(parts[10]);
                var timeZoneMinute = parseInt(parts[11]);
                timezoneOffset = timezoneSign*(timeZoneHour*60 + timeZoneMinute);
            }
			
            var date = new Date(Date.UTC(year, month, day, hour, minute, second, milisecond));  //create a date without setting timezone
            date.setUTCMinutes(date.getUTCMinutes() + timezoneOffset);  //modify date to account for timezone
            return date;
        }
    }
})();