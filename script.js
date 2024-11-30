// Pomodoro Timer
let pomodoroInterval;
let pomodoroTime = 15 * 60; // Default to 15 minutes
let isPomodoroPaused = true;

function togglePauseResume() {
  if (isPomodoroPaused) {
    startPomodoro();
  } else {
    pausePomodoro();
  }
}

function startPomodoro() {
  isPomodoroPaused = false;
  pomodoroInterval = setInterval(() => {
    if (pomodoroTime > 0) {
      pomodoroTime--;
      updatePomodoroDisplay();
    } else {
      clearInterval(pomodoroInterval);
      alert("Pomodoro complete!");
    }
  }, 1000);
}

function pausePomodoro() {
  isPomodoroPaused = true;
  clearInterval(pomodoroInterval);
}

function restartTimer() {
  clearInterval(pomodoroInterval);
  pomodoroTime = 15 * 60; // Reset to 15 minutes
  isPomodoroPaused = true;
  updatePomodoroDisplay();
}

function updatePomodoroDisplay() {
  const minutes = String(Math.floor(pomodoroTime / 60)).padStart(2, '0');
  const seconds = String(pomodoroTime % 60).padStart(2, '0');
  document.getElementById("timer").textContent = `${minutes}:${seconds}`;
}

// Current Time
function updateCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById("current-time-display").textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateCurrentTime, 1000); // Update every second

// Stopwatch
let stopwatchInterval;
let stopwatchTime = 0;
let isStopwatchRunning = false;

function startStopwatch() {
  if (!isStopwatchRunning) {
    isStopwatchRunning = true;
    stopwatchInterval = setInterval(() => {
      stopwatchTime++;
      updateStopwatchDisplay();
    }, 1000);
  }
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
  isStopwatchRunning = false;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  isStopwatchRunning = false;
  stopwatchTime = 0;
  updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
  const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0');
  const seconds = String(stopwatchTime % 60).padStart(2, '0');
  document.getElementById("stopwatch").textContent = `${hours}:${minutes}:${seconds}`;
}

// Countdown Timer
let countdownInterval;
let countdownTime = 0;

function setCountdown() {
  const days = parseInt(document.getElementById("d").value || 0) * 86400;
  const hours = parseInt(document.getElementById("h").value || 0) * 3600;
  const minutes = parseInt(document.getElementById("m").value || 0) * 60;
  const seconds = parseInt(document.getElementById("s").value || 0);

  countdownTime = days + hours + minutes + seconds;

  if (countdownTime > 0) {
    document.getElementById("startBtn").disabled = false;
    updateCountdownDisplay();
  } else {
    alert("Please set a valid countdown time!");
  }
}

function startCountdown() {
  if (countdownTime > 0) {
    countdownInterval = setInterval(() => {
      if (countdownTime > 0) {
        countdownTime--;
        updateCountdownDisplay();
      } else {
        clearInterval(countdownInterval);
        alert("Countdown complete!");
      }
    }, 1000);
  }
}

function updateCountdownDisplay() {
  const days = String(Math.floor(countdownTime / 86400)).padStart(2, '0');
  const hours = String(Math.floor((countdownTime % 86400) / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((countdownTime % 3600) / 60)).padStart(2, '0');
  const seconds = String(countdownTime % 60).padStart(2, '0');

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}
