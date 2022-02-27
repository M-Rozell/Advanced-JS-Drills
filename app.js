name = "maggie"
var name;
console.log(name); //my name will be logged

setName();
function setName() {
    var name = 'Covalence';
    console.log(name); //covalence should be logged
}

console.log('some text'); //logged first
let avg = findAvg(2, 2);
console.log('some text', avg); //logged third
function findAvg(a, b) {
    console.log('some text'); //logged second
    var answer = (a + b) / 2;
    return answer;
}
console.log(avg)

//Scoping practice

let fruitArr = ["grapes", "apples", "oranges"]
//let favFruit;
function printFruit() {
    let favFruit = fruitArr[2]
    console.log(fruitArr[0])

    function printFavFruit() {
        let leastFav = "banana";
        console.log(favFruit)
    }
    printFavFruit();
    //console.log(leastFav)
}
printFruit();
//printFavFruit(); //because favFruit had been set to a keyword globaly

oliver();
function oliver () {
    console.log("Hello " + name)
}


let newFunction = function () {
    alert("Holy Shit!!");
}
newFunction();
