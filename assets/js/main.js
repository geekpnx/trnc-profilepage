    // 'const' values shouldn't change 
    const header = document.querySelector('h1')
    // 'let' vlaues can change
    let header1 = document.querySelector('h1')

    header.textContent = 'JavaScript Basic'

//  Great base on time 
const date = new Date ()
const hour = date.getHours ()

//check conditions
if (hour >= 5 && hour < 12) {
    greeting = "good morning"
} else if (hour >= 12 &&  hour <= 18) {
    greeting = "Good Afternoon"
} else {
    greeting = "Goodd evening"
}

const para =document.getElementById('greeting')

para.textContent = greeting