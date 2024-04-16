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
let MainManu = [];
let Drink=[];
let Starter=[];

let name=document.getElementById("name");

let total=document.getElementById("total");

let PlaceOrder=document.getElementById("placeorder");


function updateMainManu() {
    const checkboxes = document.querySelectorAll('.MainManu input[type="checkbox"]:checked');
    checkboxes.forEach((checkbox) => {
      MainManu.push(checkbox.value);
    });
  }
function updateStartup() {
    const checkboxes = document.querySelectorAll('.startup1 input[type="checkbox"]:checked');
    checkboxes.forEach((checkbox) => {
      Starter.push(checkbox.value);
    });
  }
function updateDrink() {
    const checkboxes = document.querySelectorAll('.startup2 input[type="checkbox"]:checked');
    checkboxes.forEach((checkbox) => {
      Drink.push(checkbox.value);
    });
  }

function Order(){
const d=new Date();
    set(ref(db,'order/'+name.value),{
       Name:name.value,
       MainCourse:MainManu,
       Starter:Starter,
       Drink:Drink,
       Date:d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear()+","+d.getHours()+":"+d.getMinutes(),
       Totle:total.textContent,
    }).then(()=>{
        alert(name.value+" order successfully placed");
        window.location.reload();
    }).catch((error)=>{
        alert("unsuccessfull");
        console.log(error);
    });
};


function fullname(){
  let nameinput=document.getElementById("name");
  let name=nameinput.value;
  var nameRegex=/^[A-Za-z]+(?:\s[A-Za-z]+)+$/;
  if(nameRegex.test(name)){
    updateMainManu();
    updateStartup();
    updateDrink();
    Order();
  }else{
    let hidden=document.getElementById('hidden1');
      hidden.style.display='block';
      setTimeout(() => {
        hidden.style.display='none';
      },1000);
  }
}


PlaceOrder.addEventListener("click",function(e){
    e.preventDefault();
   fullname();
})







