import { SoundForest, SoundRain, SoundCoffeeShop, SoundFirePlace } from "./sounds.js"

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffeShop = document.querySelector('.coffee-shop')
const buttonFirePlace = document.querySelector('.fireplace')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let timerTimeOut

buttonForest.addEventListener('click', function() {
    buttonForest.classList.add('clicked')
    buttonRain.classList.remove('clicked')
    buttonCoffeShop.classList.remove('clicked')
    buttonFirePlace.classList.remove('clicked')
})

buttonRain.addEventListener('click', function(){
    buttonForest.classList.remove('clicked')
    buttonRain.classList.add('clicked')
    buttonCoffeShop.classList.remove('clicked')
    buttonFirePlace.classList.remove('clicked')
})

buttonCoffeShop.addEventListener('click', function(){
    buttonForest.classList.remove('clicked')
    buttonRain.classList.remove('clicked')
    buttonCoffeShop.classList.add('clicked')
    buttonFirePlace.classList.remove('clicked')
})

buttonFirePlace.addEventListener('click', function(){
    buttonForest.classList.remove('clicked')
    buttonRain.classList.remove('clicked')
    buttonCoffeShop.classList.remove('clicked')
    buttonFirePlace.classList.add('clicked')
})


buttonPlay.addEventListener('click', function(){
    countdown()
})

function countdown(){
    timerTimeOut = setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        
        secondsDisplay.textContent = "00"

        if(minutes <= 0){
            return
        }
        
        if(seconds <= 0){
            seconds = 60
            
            minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
        }
        
        secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")


        countdown()
    }, 1000)

}

buttonStop.addEventListener('click', function(){
    clearTimeout(timerTimeOut)
})

buttonPlus.addEventListener('click', function(){
    let minutes = Number(minutesDisplay.textContent)

    minutesDisplay.textContent = String(minutes + 5).padStart(2, "0")
})

buttonMinus.addEventListener('click', function(){
    let minutes = Number(minutesDisplay.textContent)

    minutesDisplay.textContent = String(minutes - 5).padStart(2, "0")
})

buttonForest.addEventListener('click', function(){
    SoundForest.play()
})

buttonRain.addEventListener('click', function(){
    SoundRain.play()
})

buttonCoffeShop.addEventListener('click', function(){
    SoundCoffeeShop.play()
})


buttonFirePlace.addEventListener('click', function(){
    SoundFirePlace.play()
})
