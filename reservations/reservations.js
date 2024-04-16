
const totalDisplay = document.querySelector('#total');
const rooms = document.querySelector('#RoomNo')

roomPrice = 0;
let total = roomPrice;
roomscount = 0;
let totalroom = roomscount;
totalDisplay.textContent = `${total}`;
rooms.textContent = `${totalroom}`;



function updatePrice() {
  const room = document.querySelector('#room').value;
  const entry = document.querySelector('#entry').value;
  const exit = document.querySelector('#exit').value;
  const people = document.querySelector('#people').value;
  let roomcapacity = 0;
  if (room === 'Presidential Suite') {
    roomPrice = 7000;
    roomcapacity += 4;
    roomscount = Number.parseInt(people / roomcapacity);
  }
  if (room === 'Mini Suite or Junior Suite') {
    roomPrice = 6000;
    roomcapacity += 3;
    roomscount = Number.parseInt(people / roomcapacity);
  }
  if (room === 'Connecting rooms') {
    roomPrice = 5000;
    roomcapacity += 4;
    roomscount = Number.parseInt(people / roomcapacity);
  }
  if (room === 'Adjacent rooms') {
    roomPrice = 4000;
    roomcapacity += 4;
    roomscount = Number.parseInt(people / roomcapacity);
  }
  if (room === 'Triple') {
    roomPrice = 3000;
    roomcapacity += 3;
    roomscount = Number.parseInt(people / roomcapacity);
  }
  if (room === 'single') {
    roomPrice = 1000;
    roomcapacity += 1;
    roomscount = Number.parseInt(people / roomcapacity);
  }
  if (room === 'double') {
    roomPrice = 1000;
    roomcapacity += 2;
    roomscount = Number.parseInt(people / roomcapacity);
  }

  if (!entry || !exit) {
    total = roomPrice;
    totalDisplay.textContent = `${total}`;

    return;
  };

  const totalDays = (new Date(exit) - new Date(entry)) / 1000 / 60 / 60 / 24;

  total = (roomPrice * totalDays) > 0 ? roomPrice * totalDays : roomPrice;
  totalroom = roomscount;
  total = total * totalroom;


  if (people - (totalroom * roomcapacity) != 0) {
    var bedsheet = people - (totalroom * roomcapacity);
    rooms.textContent = `${totalroom}+${bedsheet} bedsheet`;
  } else { rooms.textContent = `${totalroom}`; }
  totalDisplay.textContent = `₹${total}`;


}
document.querySelector('#entry').addEventListener('change', updatePrice);
document.querySelector('#exit').addEventListener('change', updatePrice);
document.querySelector('#room').addEventListener('change', updatePrice);
document.querySelector('#people').addEventListener('change', updatePrice);


