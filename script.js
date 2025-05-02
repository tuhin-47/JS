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
        console.log(`before resolve ${promise}`)
        resolve("promise resolved value")
        console.log(`after resolved ${promise}`)
    } ,3000)
})
console.log(promise)