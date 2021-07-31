const h2 = document.createElement('h2');
h2.textContent = "";
document.querySelector('body').appendChild(h2);

const squares = document.querySelectorAll('.square')
const cat = document.querySelector('.cat')
const timeLeft = document.querySelector('#time')
const score = document.querySelector('#score')

let result = 0
let hitPostition
let currentTime = 20
let timerId = null

function randomCat(){
    squares.forEach(square => {
        square.classList.remove('cat')
    })

    let randomCat = squares[Math.floor(Math.random() * 9)]
    randomCat.classList.add('cat')

    hitPostition = randomCat.id
   }

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPostition) {
            result++
            score.textContent = result
            hitPostition = null
        }    
    })
})

function moveCat() {
    
    timerId = setInterval(randomCat, 1000)
}

moveCat()


function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('CUTIE ALERT!!!! Total Cats Pet: ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)