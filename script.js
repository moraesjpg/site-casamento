/* =========================
   CONTAGEM REGRESSIVA
========================= */

// Data do casamento: 23 de Maio de 2026 às 19:00
const weddingDate = new Date("2026-05-23T19:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  // Se já chegou o dia
  if (distance <= 0) {
    const timer = document.getElementById("timer");
    if (timer) {
      timer.innerHTML = "<p>Chegou o grande dia! 💍✨</p>";
    }
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
  );

  // Atualiza os elementos apenas se existirem
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (daysEl) daysEl.textContent = days;
  if (hoursEl) hoursEl.textContent = hours;
  if (minutesEl) minutesEl.textContent = minutes;
  if (secondsEl) secondsEl.textContent = seconds;
}

// Atualiza a cada 1 segundo
const countdownInterval = setInterval(updateCountdown, 1000);

// Executa imediatamente ao carregar a página
updateCountdown();
