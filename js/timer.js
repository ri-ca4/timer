/*
    author: riley eyrich
    date: 4/11/22
    title: timer
*/

var interval = document.getElementById('interval').value;
var breakTime = document.getElementById('break').value;

var startBtn = document.getElementById('start');
var pauseBtn = document.getElementById('pause');
var resetBtn = document.getElementById('reset');

startBtn.addEventListener('click', function(){
    console.log('this did a thing');
});

pauseBtn.addEventListener('click', function(){
    console.log('this did a thing');
});

resetBtn.addEventListener('click', function(){
    console.log('this did a thing');
    document.getElementById('interval').value = 0;
    document.getElementById('break').value = 0;
});
