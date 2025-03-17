const testStr =
  "Order #1234 for user John_Doe was placed on 2025-03-16 at 10:30 AM. The total cost was $59.99. Contact: john@example.com or call (555)-123-4567."

//test() matches against a regex returns either true or false
//match() matches against a regex returns the string
//replace() finds the first string that matches regex and replaces it
//replaceAll() finds all string that matches regex and replaces it

//they usually capture a group
//they are used to capture a specific part of string like "co" from "cow"

//The ? means "zero or one occurrence". (Makes the Group Optional). Works only with groups(capturing or non-capturing group)

//Matches one or more digits
console.log(testStr.match(/\d+/gm))

//Matches any character that is NOT a digit
console.log(testStr.match(/\D+/gm))

//Matches any alphanumeric character (letters, digits, underscores).
console.log(testStr.match(/\w+/gm))

//Matches any character that is NOT a letter, digit, or underscore(includes spaces).
console.log(testStr.match(/\W+/gm))

//Matches spaces, tabs, and newlines.
console.log(testStr.match(/\s+/gm))

//Matches any character except whitespace
console.log(testStr.match(/\S+/gm))

//Checks if the entire string starts with "Order"
console.log(/^Order/.test(testStr))

//Checks if the entire string ends with "test"
console.log(/test$/.test("1234 test"))

//Matches any character except a newline(after H any character is acceptable except a new line or tab)
console.log(
  /H.llo/.test(`H
 
ello`),
)

//The preceding character is optional. (Makes u optional in this example)
console.log(/colou?r/.test("colour"))
console.log(/colou?r/.test("color"))

//it matches only consecutive characters and stops if it hits a non matching characters. it looks for atleast one match (New js version)
console.log("baaaad".match(/a+/g))

/* The * (asterisk) matches zero or more occurrences of the preceding character or pattern. This means:
If the character exists in the string, it will match as many times as possible (greedy behavior).
If the character doesn't exist, it can still match an empty string (zero occurrences). It also includes end of string (O occurence of character is allowed) */
console.log("baaaad".match(/a*/g))

//Matching a Specific Number of Times ({n}) (Matches exactly 4 digits in a row). Can work even if the number is more than n but returns only 4 digits
console.log("My pin is 12345".match(/\d{4}/gm))
console.log(/\d{4}/.test("Your OTP is 97564"))

/* checks wether a character appears within a range {m, n}
m is the minimum number of times and n is the maximum number of times */
console.log("12 23 345 4567 7891".match(/\d{2,5}/gm))

//creates a group of matching characters
console.log("I want a pen".match(/[AEIOUaeiou]/gm))

//captures character that does not belongs to the group. It also includes spaces
console.log("I want a pen".match(/[^AEIOUaeiou]/gm))

//matches alternative (either capture cat or dog)
console.log("I love dogs".match(/cat|dog/))

//capturing a group (like a credit card number)
console.log("5466-3597-2315-1547".match(/(\d{4})-(\d{4})-(\d{4})-(\d{4})/))

//non capturing groups captures the pattern without saving it is faster than non capturing groups
console.log("hi world hello world".match(/(?:hello|hi) world/gm))

/* A lookahead checks whether a pattern exists after a given match without including it in the result. (here it looks for numbers before px without including "px" in it which is 0 and 2)*/
console.log("200em 500px 912px".match(/\d(?=px)/gm))

//checks credit cards of 4 companies - Visa, Mastercard, American Express, Discover
function check(str) {
  return /^(?:4[0-9]{12}(?:[0-9]{3})?)|(?:5[1-5][0-9]{14}|2(?:2[2-9][0-9]|[3-6][0-9]{2}|7[0-1][0-9]|720[0-9]{12}))|(?:3[47][0-9]{13})|(?:6011[0-9]{12}|622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5])[0-9]{10}|64[4-9][0-9]{13}|65[0-9]{14})$/.test(
    str,
  )
}
console.log(check("4111111111111111"))
console.log(check("4111111111111"));
console.log(check("5555555555554444"));
console.log(check("2720999999999999"));
console.log(check("378282246310005"));
console.log(check("6011111111111117"));
console.log(check("6221261234567890"));
