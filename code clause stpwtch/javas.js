let start=document.getElementById('start');
let stop=document.getElementById('stop');
let  reset=document.getElementById('reset');

let  hour=00;
let min=00;
let sec=00
let count=00;

start.addEventListener('click',function() {
    timer=true;
    stopwatch();
});
stop.addEventListener('click',function(){
    timer=false;
});
reset.addEventListener('click',function(){
    timer=false;
    hour = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById('hour').innerHTML = "00";
    document.getElementById('minute').innerHTML = "00";
    document.getElementById('second').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});
function stopwatch(){
    if (timer) {
        count++;
  
        if (count == 100) {
            sec++;
            count = 0;
        }
  
        if (sec == 60) {
            min++;
            sec = 0;
        }
  
        if (min == 60) {
            hour++;
            min = 0;
            sec = 0;
        }
  
        let hrString = hour;
        let minString = min;
        let secString = sec;
        let countString = count;
  
        if (hour < 10) {
            hrString = "0" + hrString;
        }
  
        if (min < 10) {
            minString = "0" + minString;
        }
        if (sec < 10) {
            secString = "0" + secString;
        }
  
        if (count < 10) {
            countString = "0" + countString;
        }
  
        document.getElementById('hour').innerHTML = hrString;
        document.getElementById('minute').innerHTML = minString;
        document.getElementById('second').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopwatch, 7.5);
    }
}
