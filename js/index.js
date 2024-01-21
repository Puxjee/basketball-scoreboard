let homeS = document.getElementById("home-score");
let guestS = document.getElementById("guest-score");

function add1PointHome() {
  homeS.innerHTML = parseInt(homeS.innerHTML) + 1;
  leader();
}

function add1PointGuest() {
  guestS.innerHTML = parseInt(guestS.innerHTML) + 1;
  leader();
}

function add2PointHome() {
  homeS.innerHTML = parseInt(homeS.innerHTML) + 2;
  leader();
}

function add2PointGuest() {
  guestS.innerHTML = parseInt(guestS.innerHTML) + 2;
  leader();
}

function add3PointHome() {
  homeS.innerHTML = parseInt(homeS.innerHTML) + 3;
  leader();
}

function add3PointGuest() {
  guestS.innerHTML = parseInt(guestS.innerHTML) + 3;
  leader();
}

function reset() {
  homeS.innerHTML = 0;
  guestS.innerHTML = 0;
  homeS.style.color = "#FBBF24";
  guestS.style.color = "#FBBF24";
}

function leader() {
  if (parseInt(homeS.innerText) > parseInt(guestS.innerText)) {
    homeS.style.color = "green";
    guestS.style.color = "#f94f6d";
  } else if (parseInt(homeS.innerText) < parseInt(guestS.innerText)) {
    homeS.style.color = "#f94f6d";
    guestS.style.color = "green";
  } else {
    homeS.style.color = "#FBBF24";
    guestS.style.color = "#FBBF24";
  }
}
