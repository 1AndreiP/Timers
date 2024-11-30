

window.onload = function () {
	setInterval(function () {
	  const date = new Date();
	  const displayDate = date.toLocaleDateString();
	  const displayTime = date.toLocaleTimeString();
	  document.getElementById('datetime').innerHTML = `${displayDate} ${displayTime}`;
	}, 1000);
  };
  
  let timer;
  let minutes = 15;
  let seconds = 0;
  let isPaused = false;
  let enteredTime = null;
  
  function startTimer() {
	timer = setInterval(updateTimer, 1000);
  }
  
  function updateTimer() {
	const timerElement = document.getElementById('timer');
	timerElement.textContent = formatTime(minutes, seconds);
  
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
	return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
  
  function togglePauseResume() {
	const pauseResumeButton = document.querySelector('.control-buttons button');
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
	document.getElementById('timer').textContent = formatTime(minutes, seconds);
	document.querySelector('.control-buttons button').textContent = 'Pause';
	startTimer();
  }
  
  function chooseTime() {
	const newTime = prompt('Enter new time in minutes:');
	if (!isNaN(newTime) && newTime > 0) {
	  enteredTime = parseInt(newTime, 10);
	  minutes = enteredTime;
	  seconds = 0;
	  isPaused = false;
	  document.getElementById('timer').textContent = formatTime(minutes, seconds);
	  clearInterval(timer);
	  document.querySelector('.control-buttons button').textContent = 'Pause';
	  startTimer();
	} else {
	  alert('Invalid input. Please enter a valid number greater than 0.');
	}
  }
  
  startTimer();
  
  let countdownInterval;
  
  function setCountdown() {
	const d = parseInt(document.getElementById('d').value || 0);
	const h = parseInt(document.getElementById('h').value || 0);
	const m = parseInt(document.getElementById('m').value || 0);
	const s = parseInt(document.getElementById('s').value || 0);
  
	const now = new Date().getTime();
	const countdownDate = now + (d * 24 * 60 * 60 + h * 60 * 60 + m * 60 + s) * 1000;
  
	document.getElementById('startBtn').disabled = false;
	document.getElementById('startBtn').onclick = function () {
	  startCountdown(countdownDate);
	};
  }
  
  function startCountdown(countdownDate) {
	countdownInterval = setInterval(function () {
	  const now = new Date().getTime();
	  const distance = countdownDate - now;
  
	  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
	  document.getElementById('days').textContent = days;
	  document.getElementById('hours').textContent = hours;
	  document.getElementById('minutes').textContent = minutes;
	  document.getElementById('seconds').textContent = seconds;
  
	  if (distance < 0) {
		clearInterval(countdownInterval);
		alert('Countdown expired!');
	  }
	}, 1000);
  }
