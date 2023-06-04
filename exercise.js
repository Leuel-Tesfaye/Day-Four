// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
/**let age = prompt('Enter your age ')
let wait = 18 - age 
if(age >= 18){
    alert('you are old enough to drive ')
}
else (
    alert('you are not allowed to drive . You should wait'+ " " + wait +" " +'years to drive')
) */

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

/**let myAge = prompt('please enter age')
let yourAge = prompt('please enter your age')
let age = myAge - yourAge
if(myAge < yourAge){
    console.log('you are' + " "+ age + " "+ ' years older than me')
}
else(
    console.log('I am older than you ')
) */
// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways. using ternary operator in javascript
let a = 20
let b = 15
let result = a > b
result
?console.log( " "+ a +' is greater than '+ b)
:console.log( " " + a + ' is less than ' + b)

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

/**let num = prompt('Enter number ')
if(num % 2 === 0){
    alert(num + " " + 'is an even number ')
}
else {
    alert(num + " " + 'is an odd number ')
}*/

                // Exercise 2
/**
 1 . Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
 

let grade = prompt ('Enter your score')
switch(true) {
    case (grade >= 80 && grade <= 100): 
    alert ('You are an A student')
    break
    case (grade >=70 && grade <= 79) : 
    alert('You are a B student')
    break
    case (grade >= 60 && grade <=69) :
        alert('You are a C student')
    break
    case (grade >= 50 && grade <=59) :
        alert('You are a D student')
    break
    case (grade >= 0 && grade <=49) :
        alert('You are a F student')
    break
    default: 
    alert('The input you entered is invalid please check and try again !!')
}*/

/**
 * 2.  Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
 */
/**let season = prompt('Enter Month')


if (season == 'september' || season === 'october' || season === 'november') {
    alert('The season that the month'+" " + season + " " + ' belongs to is Autumn')
}
else if ( season == 'december' || season === 'january' || season === 'february'){
    alert('The season that the month'+" " + season + " " + ' belongs to is winter')
}
else if (season == 'march' || season === 'april' || season === 'may'){
    alert('The season that the month'+" " + season + " " + ' belongs to is spring')
}
else if (season == 'june' || season === 'july' || season === 'august' ){
    alert('The season that the month'+" " + season + " " + ' belongs to is summer')
}
else {
    alert('The month you entered is not correct !!')
} */ 

/**
 * 3.  Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.

let check = prompt ('Enter the day to day')
if(check == 'saturday' || check == "saturDay" || check == 'Saturday'){
    alert(check + " " + 'is weekend')
}
else if (check == 'friday' || check == "friDay" || check == 'Friday'){
    alert(check + " " + 'is working day')
}
else {
    alert('The prompt you enter is neither weekend nor working day')
} */

