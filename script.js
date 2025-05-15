// understanding callbacks using chatgpt

//basic synchronous callback

// function greet(name,callbackFunction) {
//     console.log(`Hello ${name} `)
//     callbackFunction()
// }

// function callbackOne() {
//     console.log(" I am callbackOne(). Here i am going to do something")
// }

// function callbackTwo() {
//     console.log(" I am callbackTwo(). I am going to do some work here")
// }

// function callbackThree() {
//     console.log(" I am callbackThree(). I am doing to do some extra staff here")
// }

// greet("Hasan",callbackOne)
// greet("Mahmud",callbackTwo)
// greet("Tuhin",callbackThree)

// setTimeout(()=>{
//     console.log("setTimeout")
// },3000)

// making a fetch request

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(resp => resp.json())
//     .then(json => console.log(json))

function checkErrorHandling() {
    try{
        console.log("try block running")
        return null
    }catch(err){
        console.log("catch block executing")
    }finally{
        console.log("allthough there is a retun inside try block. Finally will run before return")
    }
}

checkErrorHandling()

// promise
let promise = new Promise( function(resolve,reject) {
    console.log("Inside Promise")
    setTimeout( ()=> {
        resolve("promise resolved value")
    } ,1000)
})
console.log(promise)


let promise2 = new Promise( function(resolve,reject){
    setTimeout(()=> {}, 2000)
})
console.log(promise2)
promise2.then( data => console.log(`promise2 resolved with ${data}`))
console.log(promise2)


/**
 * Scripts and codes for browser
 * -----------------------------
 * Difference Between Javascript Function & Arrow Function
 *  => they handle `this` differently.
 *     -> Arrow function do not have their own `this`. They inherit `this` from their enclosing scope
 *  => regular functions have access to `arguments` object. Arrrow functions do not have access to the
 *     `arguments` object
 *  => Regular function can be used as constructor, Arrow functions can not be used as constructor
 * 
 * 
 */

const print = console.log
function regular() {
    this.value = 100
    setTimeout( function() {
        print(`regular function ${value}`)
    },2000)
}

function arrow(){
   this.value = 200;
    setTimeout( ()=>{
        print(`arrow function ${value}`)
    },2000)
}
print(`executing regular() function`)
regular()
print(`executing arrow() function`)
arrow()

// testing arguments objects

function argTest(a,b,c) {
    console.log(arguments)
    console.log(`printing arguments`)
    for(let i = 0; i < arguments.length; i++)
        console.log(`arguments[${i}] : ${arguments[i]}`)
}
const arrowArgTest = () =>{
    console.log(arguments)
}
console.log(`regular function argTest()`)
argTest(10,20,30)
console.log(`arrow function arrowArgTest()`)
arrowArgTest()

// MORE ON `this` part