// Iteration 2: Generate 2 random number and display it on the screen
let num1 =document.getElementById("number1")
let num2 =document.getElementById("number2")

let n1 =Math.round(Math.random()*100)
let n2 =Math.round(Math.random()*100)
 num1.innerHTML=n1;
 num2.innerHTML=n2;

// Iteration 3: Make the options button functional
const greaterThan =document.getElementById("greater-than")
const equalTo =document.getElementById("equal-to")
const lesserThan = document.getElementById("lesser-than")
var score =0;
greaterThan.addEventListener("click",()=>{
    if(n1>n2){
        score++
        resetTimer(timerId)
    }
    else{
        window.location.href ="./gameover.html"
    }
    n1= Math.round(Math.random()*100)
    num1.innerHTML =n1
    n2= Math.round(Math.random()*100)
    num2.innerHTML =n2


})
equalTo.onclick =()=>{
    if(n1==n2){
        score++
        resetTimer(timerId)
    }
    else{
        window.location.href ="./gameover.html"
    }
    n1= Math.round(Math.random()*100)
    num1.innerHTML =n1
    n2= Math.round(Math.random()*100)
    num2.innerHTML =n2

}

lesserThan.addEventListener("click",()=>{
    if(n1<n2){
        score++
        resetTimer(timerId)
    }
    else{
        window.location.href ="./gameover.html"
    }
    n1= Math.round(Math.random()*100)
    num1.innerHTML =n1
    n2= Math.round(Math.random()*100)
    num2.innerHTML =n2

})


// Iteration 4: Build a timer for the game
const timer = document.getElementById("timer")
var timerId

function startTimer(){
    let time =5
    timer.innerHTML=time;
    timerId =setInterval(()=>{
        time--
        localStorage.setItem("score",score)
        if(time==0){
            window.location.href="./gameover.html"
        }
        timer.innerHTML=time;
        
    },1000)
    //   store the score
    
};
function resetTimer(timerId){
    clearInterval(timerId)
    startTimer()
}
startTimer()
