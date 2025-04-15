const countdownEl = document.getElementById('countdown');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const customTimeInput = document.getElementById('customTime');

let interval = null;
let timeLeft = 0;
let initialDuration = 5 * 60;

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  countdownEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (interval) return;

  if (timeLeft === 0) {
    const userMinutes = parseInt(customTimeInput.value) || 5;
    initialDuration = userMinutes * 60;
    timeLeft = initialDuration;
  }

  interval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(interval);
      interval = null;
      countdownEl.textContent = "Time's up!";
      countdownEl.style.color = "red";
      pauseBtn.disabled = true;
      return;
    }

    timeLeft--;
    updateDisplay();
  }, 1000);

  startBtn.disabled = true;
  pauseBtn.disabled = false;
}

function pauseTimer() {
  clearInterval(interval);
  interval = null;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
}

function resetTimer() {
  clearInterval(interval);
  interval = null;
  timeLeft = 0;
  countdownEl.style.color = "#333";
  updateDisplay();
  startBtn.disabled = false;
  pauseBtn.disabled = true;
}

// Events
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Init display
updateDisplay();
