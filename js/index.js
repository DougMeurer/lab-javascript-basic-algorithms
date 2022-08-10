console.log(`I am ready!`)

const hacker1 = "Doug"

const hacker2 = "Karen"

console.log(`The drivers name is ${hacker1}`)

console.log(`The drivers name is ${hacker2}`)

if (hacker2.length < hacker1.length) {
console.log(`The ${hacker1} has the longest name, it has ${hacker1.length} characters`)
}
if (hacker1.length < hacker2.length) {
    console.log(`It seems that the ${hacker2} has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}
  

let hacker1Upper = hacker1.toUpperCase()

console.log(hacker1Upper)

let hacker1ToSplit = hacker1Upper.split('')

console.log(hacker1ToSplit)

let hacker1ToJoin = hacker1ToSplit.join(" ")

console.log(hacker1ToJoin)
