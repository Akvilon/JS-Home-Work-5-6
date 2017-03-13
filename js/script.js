

var total = 0;
var state = 0;
var begin, start, stop, zeros;

begin = document.getElementById('startPause'); 

begin.onclick = function startPause() {
  run();
  begin.innerHTML = 'Pause';
  
  if (state == 0) {
    state = 1;
    start = new Date();
    start.setTime(start.getTime() - total);
  } else {
  state = 0;
  begin.innerHTML = 'Cont...';
  stop = new Date();
     }
  }

 zeros = document.getElementById('reset'); 
  
zeros.onclick = function reset() {
  state = 0;
  total = 0;
  begin.innerHTML = 'Start';
 
  document.getElementById('clockBox').innerHTML = '00:00:00';
  document.getElementById('clockBox_msc').innerHTML = '000';

}
function run() {
  setTimeout("run();", 50);
  if (state == 1)  {
    stop = new Date();
    total = stop.getTime() - start.getTime();
    var msecs = total % 1000;
    var secs = Math.floor(total/1000 % 60 );
    var mins = Math.floor(total/60000 % 60);
    var hrs = Math.floor(total/3600000 % 60);
    if (hrs < 10) {
      hrs = '0' + hrs;
    }
    if (mins < 10) {
      mins = '0' + mins;
    }
    if (secs < 10) {
      secs = '0' + secs;
    }
    if (msecs < 100) {
      msecs = '0' + msecs;
    }
    
    document.getElementById('clockBox').innerHTML = hrs + ':' + mins + ':' + secs;
    document.getElementById('clockBox_msc').innerHTML = msecs;
  }
}

