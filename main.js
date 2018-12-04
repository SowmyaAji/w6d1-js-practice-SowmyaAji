let givenName = "Addison";


const candies = 20
const people = 6
let leftOver = (candies % people);




function greeting(name) {
    let greeting = `Hello ${name}!`;
    console.log(greeting);

}


function isOdd(number) {
    if (number % 2 === 1 || number % 2 === -1) {
        console.log('It is an odd number')
    }
    else { console.log('It is not an odd number') }


    function isEven(number) {
        if (number % 2 === 0) {
            return true; console.log("is an even number")
        }
    }

    function celsiusToFahrenheit(celsius) {
        var fahrenheit = (celsius * 9) / 5 + 32;
        console.log(fahrenheit);
    }

    function fahrenheitToCelsius(fahrenheit) {
        var celsius = (fahrenheit - 32) * 5 / 9;
        console.log(celsius);
    }

    let celcius = function (fahrenheitToCelsius) { return (fahrenheit - 32) * 5 / 9 }
    let fahrenheitToKelvin = celcius + 273.14;
    console.log(fahrenheitToKelvin)

    function lesser(x, y)
    if (x < y) { return x }
    else { return y };


    function multiGreeting(name, code) {

        let array = {
            en: 'Hello,
        es: 'iHola',
            fr: 'Bonjour',
            eo: 'Saluton'
        }

        if (code in array) {
            return ${
                'array(code)'
            } ${ 'name' }
        }
    }


    function sum(numbers)
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum)


    function average(numbers) {
        let sum = 0;
        for (i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return
        sum / numbers.length
        console.log(average)
    }


    function minimum(numbers) {
        let minimum = undefined
        for (i = 0, i < numbers.length, i++) {
            if (number === undefined)
                minimum = undefined
        }
            else if (minimum > number) {
            minimum = number
        }
        return minimum;
        console.log(minimum)
    }






// 13. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.
