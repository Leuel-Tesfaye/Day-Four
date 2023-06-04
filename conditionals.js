//if condition 
let isRaining = false
if(isRaining){
    alert('You need a rain coat')
}

//if else condition
/**let num = prompt ('Enter the number you want to check')
if (num %2 == 0){
    alert('The number you entered is even number ')
}
else {
    alert('The number you entered is odd number ')
}*/

// if else if condition 
/**let weather = prompt('Enter the weather you are in')
if(weather === 'rainy'){
    alert('you need a rain coat')
}
else if (weather === 'cloudy'){
    alert ('you need a jacket')
}
else if(weather === 'sunny'){
    alert('you can go out with a sweater')
}
else {
    alert ('The prompt you entered is not available in this program ')
}*/

//switch 
/**let weather = prompt ('Enter the weather in your environment')
switch (weather){
    case 'rainy': 
    alert('You need a rain coat')
    break 
    case 'sunny':
        alert('You can go with a sweater')
        break
    default: 
    alert('The prompt you entered is not available at this time ')
}*/

// switch example 2 
let num = prompt('Enter number')
switch(true){
    case num > 0:
        alert('Number is positive')
    break
    case num === 0:
        alert('Number is zero')
    break
    case num < 0: 
    alert('Number is negative')
default :
    alert('Entered number is not numerical value')
}