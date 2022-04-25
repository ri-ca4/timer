/*
    author: riley eyrich
    date: 4/11/22
    title: timer
*/
var intervalTime = '';
var breakTime = '';

var startBtn = document.getElementById('start');
var pauseBtn = document.getElementById('pause');
var resetBtn = document.getElementById('reset');

startBtn.addEventListener('click', function(){
    //validate input fields
    intervalTime = document.getElementById('interval').value;
    breakTime = document.getElementById('break').value;
    timerInt();
    }
);

//pause button event

resetBtn.addEventListener('click', function(){
    clearInterval(interval);
    document.getElementById('clockFace').innerHTML = "";
});

function timerInt() {
    var mins = intervalTime;
    document.getElementById('clockFace').innerHTML = mins;
    interval = setInterval(function() {  
         mins--;
         document.getElementById('clockFace').innerHTML = mins;
         if(!mins){
            clearInterval(interval); 
            alert("done");//play sound
            timerBrk();
         }
    },1000)
}

function timerBrk() {
    var mins = breakTime;
    document.getElementById('clockFace').innerHTML = mins;
    interval = setInterval(function() {  
         mins--;
         document.getElementById('clockFace').innerHTML = mins;
         if(!mins){
            clearInterval(interval);
            alert("done");//play sound
            timerInt();
         }
    },1000)
}