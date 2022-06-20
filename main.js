let startBtn=document.querySelector('.start')
let pauseBtn=document.querySelector('.pause')
let resetBtn=document.querySelector('.reset')
let timer_t=document.querySelector('.timer_t');


startBtn.addEventListener('click', start)
pauseBtn.addEventListener('click', pause)
resetBtn.addEventListener('click', reset)

let seconds=0;
let interval=null;



function timer(){
    seconds++;

    let hrs=Math.floor(seconds / 3600);
    let min=Math.floor((seconds -(hrs * 3600)) / 60);
    let sec=seconds % 60;

    if(hrs < 10) hrs='0' + hrs
    if(min < 10) min='0' + min
    if(sec < 10) sec='0' + sec
   

    timer_t.textContent=`${hrs} : ${min} : ${sec}`

}

timer()

function start(){
    if(interval){
        return
    }

    interval=setInterval(timer, 1000)
}

function pause(){
    clearInterval(interval);

    interval=null;
}

function reset(){
    stop();

    seconds=0;

    timer_t.textContent='0 : 0 : 0'
}
