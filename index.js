// Write your solution here!

// 1
let drivers = ["Milo", "Otis", "Garfield"]


console.log(drivers)

// 2
function destructivelyAppendDriver(name) {
    drivers.push(name)
}


// 3

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}


// 4

function destructivelyRemoveLastDriver() {
    drivers.pop()
}

// 5

function destructivelyRemoveFirstDriver() {
    drivers.shift()
}

function appendDriver(name) {
    let newDrivers = [...drivers]
    newDrivers.push(name)
    return newDrivers
}


function prependDriver(name) {
    let newDrivers = [...drivers]
    newDrivers.unshift(name)
    return newDrivers
}

function removeLastDriver() {
    let newDrivers = [...drivers]
    newDrivers.pop()
    return newDrivers
}

function removeFirstDriver() {
    let newDrivers = [...drivers]
    newDrivers.shift()
    return newDrivers
}

