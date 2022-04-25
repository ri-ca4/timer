/*
    author: riley eyrich
    date: 4/11/22
    title: timer
*/

var intervalTime = document.getElementById('interval').value;
var breakTime = document.getElementById('break').value;

var startBtn = document.getElementById('start');
var pauseBtn = document.getElementById('pause');
var resetBtn = document.getElementById('reset');

startBtn.addEventListener('click', timerInt);

pauseBtn.addEventListener('click', function(){
    console.log('this did a thing');
});

resetBtn.addEventListener('click', function(){
    console.log('this did a thing');
    document.getElementById('interval').value = 0;
    document.getElementById('break').value = 0;
});

function timerInt() {
    mins = intervalTime;   
    interval = setInterval(function() {  
         mins--;
         document.getElementById('clockFace').innerHTML = mins;
         if(!mins){
              clearInterval(interval); 
              alert("done");
              timerBrk();
         }
    },1000)
}

function timerBrk() {
    mins = breakTime;   
    interval = setInterval(function() {  
         mins--;
         document.getElementById('clockFace').innerHTML = mins;
         if(!mins){
              clearInterval(interval); 
              alert("done");
              timerInt();
         }
    },1000)
}