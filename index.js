document.getElementById('play').onclick = function () {
  let name = prompt('Enter ur name');
  let cname = prompt('Enter ur crush name');

  let love = Math.floor(Math.random() * 101);

  const hlove = document.getElementById('love');
  hlove.textContent = `Love between ${name} and ${cname} is ${love} `;
};

document.onload = setInterval(function () {
  const hr = document.getElementById('hr');
  const min = document.getElementById('min');
  const sec = document.getElementById('sec');
  const wlcm = document.getElementById('wlcm');

  let date = new Date();
  hr.textContent = `${date.getHours()} : `;
  min.textContent = `${date.getMinutes()} : `;
  sec.textContent = `${date.getSeconds()}`;

  if (date.getHours() < 12 && date.getHours() >= 0) {
    wlcm.textContent = 'Good Morning';
  } else if (date.getHours() >= 12 && date.getHours() < 16) {
    wlcm.textContent = 'Good Afternoon';
  } else {
    wlcm.textContent = 'Good Evening';
  }
}, 1000);
