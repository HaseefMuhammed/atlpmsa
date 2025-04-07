
function updateTime() {
  const timeInput = document.getElementById('timeInput');
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  
  timeInput.value = `${hours}:${minutes}`;
}

setInterval(updateTime, 1000); // Update every second
updateTime(); // Initial call to set the time immediately


console.log(`Version 1.3 | 14-8-2024 | developed by Haseef Muhammed PC`);