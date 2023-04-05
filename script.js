// GLOBAL VARIABLES
const dateContainer = document.getElementById("date");
const hoursContainer = document.getElementById("hour");
const minutesContainer = document.getElementById("minute");
const secondsContainer = document.getElementById("second");
const amPmContainer = document.getElementById("am_pm");

const updateTimeFun = () => {
  // DEFINING THE DATE OBJECT
  const now = new Date();

  // ARRAY OF DAY OF THE WEEK
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][now.getDay()];

  // ARRAY OF THE MONTH NAME
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][now.getMonth()];

  const date = now.getDate();
  const year = now.getFullYear();
  const hours = now.getHours();
  const amPm = hours >= 12 ? "PM" : "AM";
  const twelveHourFormat = hours % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  // INSERTING THE TIME VALUE TO THE HTML
  dateContainer.innerText = `${dayOfWeek}, ${monthName} ${date}, ${year}`;
  hoursContainer.innerText = twelveHourFormat;
  minutesContainer.innerText = minutes;
  secondsContainer.innerText = seconds;
  amPmContainer.innerText = amPm;
};

// THE SET INTERVAL FUNCTION IS USING TO CALL THE UPDATE TIME FUNCTION IN EVERY SECONDS.
setInterval(updateTimeFun, 1000);

// Brief Description of how I implemented the javascript functionality. To achieve the Digital Clock.

// Here are the few steps below:

// 1. First I am getting all the necessary Html elements by their ID and storing them in a global variable. So that I can easily pass the dynamic value of the clock to the Html elements.

// 2. We created a function with the name of 'update time function'. So in this function, we will have all our logics to build the digital clock.

// 3. We are defining the new Date object method in a variable which is a JavaScript built-in function. 'new Date()' object represents the current date and time according to the user's system clock. So using the 'new Date()' object we will be able to get our user's current date and time.

// 4. We are defining the day of the week's array. And we call the getDay() function which will return the current day of the week. The getDay() function is the method of the Date object in JavaScript that allow you to retrieve specific information about a given date.

// 5. We are defining the month name array. And we call the getMonth() function which will return the current month of the year. The getMonth() function is the method of the Date object in JavaScript that allow you to retrieve specific information about a given date.

// 6. We are defining some variables with the name of date, year, amPm, hours, twelveHourFormat, minutes, seconds.

// 6.1. So, in the date variable we are storing the current date by calling the getDate() function and it returns the current date of the month.

// 6.2. And in the year variable we are storing the current year by calling the getYear() function and it returns the current year.

// 6.3. In the amPm variable we are storing the current time formate wether it's 'AM' or 'PM. So we pass a condition if the hours value is greater than or equal to 12 then it will return 'PM' otherwise it will return 'AM'.

// 6.4. And in the hours variable we are storing the current hour by calling the getHour() function but it's return the hours by 24 hours formate. But we need 12 hours formate. To get this done we are storing the 12 hours format time in twelveHourFormat variable. And we pass a condition if the 'hours % 12 || 12' is used to convert a given number of hours to a 12-hour format.

// 6.5. In the minutes variable we are storing the current minute by calling the getMinute() function which is a method of the Date object. And called the toString() & padStart() functions. And in the pasStart function we have passed 2 arguments "2, '0'". The toString() function converts the number returned by getMinutes() to a string. And the padStart(2, "0") function is a method of the String object that pads the string with leading zeros until it is at least two characters long. The first argument 2 specifies the minimum length of the string, and the second argument "0" specifies the character to use for padding.

// 6.6. In the seconds variable we are storing the current seconds by calling the getSeconds() function which is a method of the Date object. And called the toString() & padStart() functions. toString() & padStart() functions definition already mention in the 6.5.

// 7. Finally, We defined a set interval function and in this set interval function we are passing our update time function and updating it in every second.

// NB: I took some help from ChatGpt to get a clear understanding. But I use only 10 percent of ChatGpt words.
