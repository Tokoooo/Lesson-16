function oddOrEven(num) {
  if (num % 2 === 0){
     return true
  }else {
     return false
  }
}
console.log(oddOrEven(8))


function rectanglePerimeter(length, width){
    return (width + length) * 2
}
console.log(rectanglePerimeter(4, 6))

function squarePerimeter(side){
    return 4 * side
}
console.log(squarePerimeter(4))

function getRandomNumber() {
    return Math.floor(Math.random() * 101)
}
console.log(getRandomNumber())

function getCurrencySymbolFromCode(curr){
    let symbol;
    switch (curr) {
        case 'USD':
            symbol = '$';
            break;
        case 'EUR':
            symbol = '€';
            break
        case 'GEL':
            symbol = '₾'
            break
        default:
            symbol = 'not correct input';
            break
    }
    return symbol
}

console.log(getCurrencySymbolFromCode())

let people = [
    {
        name: 'Tornike',
        age: 19
    },
    {
        name: 'Tatia',
        age: 21
    },
    {
        name: 'Nikolozi',
        age: 23
    },
    {
        name: 'Guga',
        age: 30
    },
    {
        name: 'Zura',
        age: 33
    }
]

function getYoungest(arr){
    let youngest = arr[0]
    for (let i = 1 ; i < arr.length; i++){
        if (arr[i].age < youngest.age) {
            youngest = arr[i]
        }
    }
    return youngest
}
console.log(getYoungest(people))