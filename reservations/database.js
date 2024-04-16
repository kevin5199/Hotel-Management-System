import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import{getDatabase,ref,child,onValue,get,set,update,remove}
from"https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyBuJxbv6ppuoBLvM6ylTu46VDwbDpYLO3M",
  authDomain: "hotel-management-system-3b437.firebaseapp.com",
  databaseURL: "https://hotel-management-system-3b437-default-rtdb.firebaseio.com",
  projectId: "hotel-management-system-3b437",
  storageBucket: "hotel-management-system-3b437.appspot.com",
  messagingSenderId: "116770838249",
  appId: "1:116770838249:web:44e0e6daf587e276184278"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db=getDatabase();

let name=document.getElementById("name");
let numberofpeople=document.getElementById("people");
let room=document.getElementById("room");
let entry=document.getElementById("entry");
let exit=document.getElementById("exit");
let total=document.getElementById("total");

let makereservation=document.getElementById("card-button");



function Reservation(){
// for set the data in firebase
    set(ref(db,'Reservation/'+name.value),{
       Name:name.value,
       NumberOfPeople:numberofpeople.value,
       Room:room.value,
       Entry:entry.value,
       Exit:exit.value,
       Totle:total.innerText,
    }).then(()=>{
        alert(name.value+" reservation is successfully done");
        window.location.reload();
    }).catch((error)=>{
        alert("unsuccessfull");
        console.log(error);
    });
};


function validateEmail(event) {
    event.preventDefault();
    
    let emailInput = document.getElementById('email');
    let email = emailInput.value;
  
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailRegex.test(email)) {
      Reservation();
    } else {
      let hidden=document.getElementById('hidden');
      hidden.style.display='block';
      setTimeout(() => {
        hidden.style.display='none';
      },1000);
    }
};

function fullname(event){
  event.preventDefault();
  let nameinput=document.getElementById("name");
  let name=nameinput.value;
  var nameRegex=/^[A-Za-z]+(?:\s[A-Za-z]+)+$/;
  if(nameRegex.test(name)){
    validateEmail(event);
  }else{
    let hidden=document.getElementById('hidden1');
      hidden.style.display='block';
      setTimeout(() => {
        hidden.style.display='none';
      },1000);
  }
}

  makereservation.addEventListener("click",function required(event){
    event.preventDefault();
    if(totalroom>10){
      alert("room is not available for "+people.value+" people")
    }else{
    let fullName=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let numberOfPeople=document.getElementById("people").value;
    let Entry=document.getElementById("entry").value;
    let Exit=document.getElementById("exit").value;
    let Room=document.getElementById("room").value;
    let message=document.getElementById("hidden1");
  
    if(fullName===""){
         message.innerHTML="Full name is required";
         message.style.color="red";
    }else if(email===""){
      message.innerHTML="Email is required";
      message.style.color="red";
    }
    else if(numberOfPeople===""){
      message.innerHTML="people is required";
      message.style.color="red";
    }
    else if(Entry===""){
      message.innerHTML="Entry date is required";
      message.style.color="red";
    }
    else if(Exit===""){
      message.innerHTML="Exit date is required";
      message.style.color="red";
    }
    else if(Room===""){
      message.innerHTML="Room is required";
      message.style.color="red";
    }
    else{
      fullname(event)   
    }
    }
  })




