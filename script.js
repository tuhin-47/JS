//Eloquent JS Practice
let print = console.log

function speak(msg) {
    print(`${this.type} says ${msg}`)
    print(`${this}`)
}

let fn1 = {type:"Random", speak}

fn1.speak("Hello World")
print(fn1)