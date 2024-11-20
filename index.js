window.onload = function() {
  setInterval(function(){
      var date = new Date();
      var displayDate = date.toLocaleDateString();
      var displayTime = date.toLocaleTimeString();

      document.getElementById('datetime').innerHTML = displayDate + " " + displayTime;
  }, 1000); // 1000 milliseconds = 1 second
}
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the elements with respective ids
document.getElementById("days").innerHTML = days + "d ";
document.getElementById("hours").innerHTML = hours + "h ";
document.getElementById("minutes").innerHTML = minutes + "m ";
document.getElementById("seconds").innerHTML = seconds + "s ";

// If the count down is finished, write some text
if (distance < 0) {
clearInterval(x);
document.getElementById("countdown").innerHTML = "EXPIRED";
}
}, 1000);


// script.js 
let timer; 
let minutes = 15; 
let seconds = 0; 
let isPaused = false; 
let enteredTime = null; 

function startTimer() { 
	timer = setInterval(updateTimer, 1000); 
} 

function updateTimer() { 
	const timerElement = 
		document.getElementById('timer'); 
	timerElement.textContent = 
		formatTime(minutes, seconds); 

	if (minutes === 0 && seconds === 0) { 
		clearInterval(timer); 
		alert('Time is up! Take a break.'); 
	} else if (!isPaused) { 
		if (seconds > 0) { 
			seconds--; 
		} else { 
			seconds = 59; 
			minutes--; 
		} 
	} 
} 

function formatTime(minutes, seconds) { 
	return
	`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`; 
} 

function togglePauseResume() { 
	const pauseResumeButton = 
		document.querySelector('.control-buttons button'); 
	isPaused = !isPaused; 

	if (isPaused) { 
		clearInterval(timer); 
		pauseResumeButton.textContent = 'Resume'; 
	} else { 
		startTimer(); 
		pauseResumeButton.textContent = 'Pause'; 
	} 
} 

function restartTimer() { 
	clearInterval(timer); 
	minutes = enteredTime || 15; 
	seconds = 0; 
	isPaused = false; 
	const timerElement = 
		document.getElementById('timer'); 
	timerElement.textContent = 
		formatTime(minutes, seconds); 
	const pauseResumeButton = 
		document.querySelector('.control-buttons button'); 
	pauseResumeButton.textContent = 'Pause'; 
	startTimer(); 
} 

function chooseTime() { 
	const newTime = prompt('Enter new time in minutes:'); 
	if (!isNaN(newTime) && newTime > 0) { 
		enteredTime = parseInt(newTime); 
		minutes = enteredTime; 
		seconds = 0; 
		isPaused = false; 
		const timerElement = 
			document.getElementById('timer'); 
		timerElement.textContent = 
			formatTime(minutes, seconds); 
		clearInterval(timer); 
		const pauseResumeButton = 
			document.querySelector('.control-buttons button'); 
		pauseResumeButton.textContent = 'Pause'; 
		startTimer(); 
	} else { 
		alert('Invalid input. Please enter'+ 
			' a valid number greater than 0.'); 
	} 
} 

startTimer();
