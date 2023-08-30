import { suma } from './suma.js'

let testPassed = 0
let result
console.log('Test 1.- Must return null if any params is not a number')
result = suma(2, '2')
if (result === null) {
    console.log('✔️ PASS')
    testPassed++
} else {
    console.log(`✖️ FAIL. The result is ${result}`)
}

console.log('Test 2.- Must return 0 if there is not params')
result = suma()
if (result === 0) {
    console.log('✔️ PASS')
    testPassed++
} else {
    console.log(`✖️ FAIL. The result is ${result}`)
}

console.log('Test 3.- The sum must be correct')
result = suma(2, 3)
if (result === 5) {
    console.log('✔️ PASS')
    testPassed++
} else {
    console.log(`✖️ FAIL. The result is ${result}`)
}

console.log('Test 4.- The sum must be correct with many params')
result = suma(1, 2, 3, 4, 5, 6)
if (result === 21) {
    console.log('✔️ PASS')
    testPassed++
} else {
    console.log(`✖️ FAIL. The result is ${result}`)
}
console.log(`Pasaron ${testPassed} tests`)