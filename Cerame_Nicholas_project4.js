//Nicholas Cerame
//September 22th, 2011
//Deliverable 4

// Find the smallest value in an array that is greater than a given number

var smallValue = function(numArray, number) {
	var largerNums = [],
		smallestNum;
	
	for (i = 0; i < numArray.length; i++) {
		if (numArray[i] > number) {
			largerNums.push(numArray[i]);
		}
	}
	
	smallestNum = largerNums[0];
	
	for (j = 0; j < largerNums.length; j++) {
		if (smallestNum > largerNums[j]) {
			smallestNum = largerNums[j];
		}
	}
	
	return ("The smallest number that is greater than " + number + " is " + smallestNum + ".");
}


// Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10


var specificDec = function (number) {
	var newNumber;
	
	newNumber = number.toFixed(2);
	
	return (number + " has been rounded to " + newNumber);	
}


// Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".

var charReplace = function (string, oldChar, newChar) {
	var myString = string,
		old = new RegExp(oldChar, "g");
	
	myString = myString.replace(old, newChar);
	
	return myString;
}


// Is the string a URL? (Does it start with http: or https:?)

var urlCheck = function (string) {
	var url = string,
		check = "",
		checkArray = [],
		end = url.indexOf(":");
		
	checkArray[0] = "http:";
	checkArray[1] = "https:";
		
	check = url.substring(0, end + 1);
	
	if (check === checkArray[0]) {
		return (url + " is a valid URL.");
	}
	else if (check === checkArray[1]) {
		return (url + " is a valid URL.");
	}
	else {
		return (url + " is not a valid URL.");
	}
}


// Does a string follow an aaa@bbb.ccc pattern like an email address?

var emailCheck = function (localEmail) {
	var email = localEmail,
		checkAt = 0,
		checkDot = 0;
		
	checkAt = email.indexOf("@");
	checkDot = email.indexOf(".");
	
	if (checkAt != -1 && checkDot != -1) {
		if (checkAt < checkDot) {
			if (checkDot - checkAt != 1) {
				return (email + " is a valid email.");
			}
			else {
				return (email + " is not a valid email.");
			}
		}
		else {
			return (email + " is not a valid email.");
		}
	}
	else {
		return (email + " is not a valid email.");
	}	
}


// Does a string follow a 123-456-7890 pattern like a phone number?

var numberCheck = function (phoneNumber) {
	var number = phoneNumber,
		regExpPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
		check;
		
	check = regExpPattern.test(number);
	
	if (check) {
		return (number + " is a valid phone number.");
	}
	else {
		return (number + " is not a valid phone number.");
	}
}

var numArray = [5, 12, 15, 21, 38, 45, 43, 65, 123, 32, 12, 23]

console.log(specificDec(2.1));
console.log(specificDec(3.2123));
console.log(specificDec(100));

console.log(smallValue(numArray, 22));

console.log(charReplace("A,B,C,D,E", ",", "/"));

console.log(urlCheck("http://www.google.com/"));
console.log(urlCheck("google.com"));

console.log(emailCheck("NickCerame@fullsail.edu"));
console.log(emailCheck("NickCerame@fullsailedu"));

console.log(numberCheck("314-583-0268"));
console.log(numberCheck("(314)-583-0268"));
console.log(numberCheck("314-583-026"));

alert("JavaScript works!");