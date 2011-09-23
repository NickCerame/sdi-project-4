//Nicholas Cerame
//September 22th, 2011
//Deliverable 4

var numArray = [5, 12, 15, 21, 38, 45, 43, 65, 123, 32, 12, 23]

//Title-case a string (split into words, then uppercase the first letter of each word)

var titleCase = function(string) {
	var newString = "",
		stringArray = [],
		end = string.indexOf(" ");
		
		
		
	return string.substring(0, end).toUpperCase(0,1);
}


//Find the smallest value in an array that is greater than a given number

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
	
	return "The smallest number that is greater than " + number + " is " + smallestNum + ".";
}


// Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10


var test = 2.1;

console.log(test.toFixed(2));









console.log(smallValue(numArray, 22));

console.log(titleCase("hello world"));




alert("JavaScript works!");