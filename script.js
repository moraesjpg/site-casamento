// Data do casamento: 23 de Maio de 2026 às 19:00
const weddingDate = new Date("2026-05-23T19:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const timer = document.getElementById("timer");

  if (distance <= 0) {
    if (timer) timer.innerHTML = "<p>Chegou o grande dia! 💍✨</p>";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
