let d;

// Date() fetches the current time and date
d = new Date();

// turns the date into a string
d = d.toString();

// sets the inserted date and time (year, month (january = 0), day, hour, minute, second)
d = new Date(2021, 1, 10, 22, 44, 10); //Wed Feb 10 2021 22:44:10 GMT-0300 (Brasilia Standard Time)
// you can also set the date with a string
d = new Date('2021-01-11T12:30:00'); // this option can be off 1 day because if the time zone is not set, or
d = new Date('01/11/2021  12:30:00'); //or
d = new Date('01-11-2021'); // by putting the month first it isn't off by a day

// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

// gets a timestamp
d = Date.now();

//get a timestamp of a specific date
d = new Date(); // set the date inside the parenthesis or leave it blank of the current time
d = d.getTime(); //or
d = d.valueOf(); // 1718062969170
d = new Date(1718062969170); // Mon Jun 10 2024 20:42:49 GMT-0300 (Brasilia Standard Time)
d = Date.now(); //1718063071991
d = new Date(1718063071991); // Mon Jun 10 2024 20:44:31 GMT-0300 (Brasilia Standard Time)

// timestamp is expressed in milliseconds to convert it to seconds 
d = Math.floor(Date.now() / 1000); // 1718063168 timestamp in seconds
d = Math.floor(Date.now() / (1000 * 60)); // 28634386 timestamp in minutes
d = Math.floor(Date.now() / (1000 * 60 * 60)); // timestamp in hours
d = Math.floor(Date.now() / (1000 * 60 * 60 * 24)); // 19884 time stamp in days
d = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 365.25)); // 54 time stamp in years
// the time stamp in years is returned 54 because the start time of the Date function is January 1, 1970, 00:00:00 UTC, thats the Unix Epoch which is a reference point used in computing to mark the beginning of time in many operating systems and programming languages.
console.log(d, typeof d);
