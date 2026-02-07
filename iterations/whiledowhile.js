array = ["a", "b", "c", "d", "e"]
let arr = 0

while (arr < array.length){

    console.log(array[arr])
    arr++
}

let count = 0

do {
    console.log(`Count is: ${count}`)
    count++
} while (count < 5) // do while loop always executes at least once, even if the condition is false at the beginning.