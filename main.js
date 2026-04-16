const timeEl = document.getElementById("epoch-time");

function tick() {
  timeEl.textContent = Date.now();
}

tick();
setInterval(tick, 1000);
