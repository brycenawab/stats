var userInputString = prompt("please enter some integers seperated by commas");
var stringArray = userInputString.split(",");
var numbers = [];
for (let i=0 ; i < stringArray.length ; i++) {
    var str = stringArray[i];
    var number = parseInt(str);
    numbers.push(number);
}

console.log("you have given " + numbers.length + " numbers" );

var sum = 0;
for (let i=0 ; i < numbers.length ; i++){
    sum += numbers[i];
}
console.log("the sum of your numbers is " + sum + "");



function mean (){
return sum / numbers.length}

console.log("the mean is " + mean());

function getMin(numbers){
    return Math.min(...numbers);
}
console.log("the smallest number is "+ getMin(numbers));

function getMax(numbers){
    return Math.max(...numbers);
}
console.log("the largest number is "+ getMax(numbers));

function getEven(numbers){
    var newArray = []
    for (let i=0; i<numbers.length; i++){
        let currentNum = numbers[i]
        if(currentNum % 2 === 0) {
            newArray.push(currentNum)
        } 
    }
   return newArray
}
console.log("even numbers are " + getEven(numbers))

function getOdd(numbers){
    var newArray = []
    for(i=0 ; i < numbers.length ; i++){
        let currentNum = numbers[i];
        if(currentNum % 2 === 1){
            newArray.push(currentNum)
        }
    }
    return newArray
}
console.log("odd numbers are " + getOdd(numbers))