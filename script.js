const inputItem = document.querySelector("#item")
const buttonAdd = document.querySelector("#buttonAddItem")
const buttonSum = document.querySelector("#buttonSum")
const list = document.querySelector("#yourList")
const count = document.querySelector("#counter")
const sum = document.querySelector("#resultSum")


const numbers = [] 
let accumulator = 0

// add item in list
buttonAdd.addEventListener("click", () => {
    const item = Number(inputItem.value)
    numbers.push(item)
    accumulator++
    list.textContent = `Your List: [${numbers}]`
})

// sum all number in array with recursion

function sumAll(array) {
    if (array.length == 0) {
        return 0
    }
    return array.splice(0, 1)[0] + sumAll(array)
}

buttonSum.addEventListener("click", () => {
    count.textContent = `Count: ${accumulator}`
    sum.textContent = `Sum: ${sumAll(numbers)}`
})
