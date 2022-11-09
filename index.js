let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    alert("You got " + count + " of them phonies!! You earned some rest !!")
    countEl.textContent = 0
    count = 0
}
