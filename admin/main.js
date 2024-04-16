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

let employeeId=document.getElementById("eid");
let employeeName=document.getElementById("name");
let Position=document.getElementById("position");
let Address=document.getElementById("address");
let Phone=document.getElementById("phone");

let addbtn=document.getElementById("addbtn");
let upbtn=document.getElementById("upbtn");
let delbtn=document.getElementById("delbtn");
let retbtn=document.getElementById("retbtn");

function AddData(){

    set(ref(db,'employeeForm/'+employeeId.value),{
        id:employeeId.value,
        name:employeeName.value,
        position:Position.value,
        Address:Address.value,
        Phone:Phone.value,
    }).then(()=>{
        alert("Employee Data added successfully");
        window.location.reload();
    }).catch((error)=>{
        alert("unsuccessfull");
        console.log(error);
    });
};



function RetData(){
    const dbref=ref(db);

    get(child(dbref,'employeeForm/'+employeeId.value)).then((snapshot)=>{
        if(snapshot.exists()){
            employeeName.value=snapshot.val().name;
            Position.value=snapshot.val().position;
            Address.value=snapshot.val().Address;
            Phone.value=snapshot.val().Phone;
        }
        else{
            alert("Employee does not exist");
        }
    })
    .catch((error)=>{
        alert("unsuccessfull");
        console.log(error);
    });
}

function UpData(){
    update(ref(db,'employeeForm/'+employeeId.value),{
        name:employeeName.value,
        position:Position.value,
        Address:Address.value,
        Phone:Phone.value,
    }).then(()=>{
        alert("Employee updated successfully");
        window.location.reload();
       
    }).catch((error)=>{
        alert("unsuccessfull");
        console.log(error);
    });
};



document.querySelector('#addEmployee').addEventListener('click', () => document.querySelector('#employeeFormContainer').classList.remove('hidden'));

retbtn.addEventListener("click",function(e){
    e.preventDefault();
    RetData();
 });
upbtn.addEventListener("click",function(e){
    e.preventDefault();
    UpData();
    
 });

 function validateEmail(event) {
    event.preventDefault();
    
    let emailInput = document.getElementById('address');
    let email = emailInput.value;
  
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailRegex.test(email)) {
      AddData();
    } else {
      let hidden=document.getElementById('hidden');
      hidden.style.display='block';
      setTimeout(() => {
        hidden.style.display='none';
      },2000);
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
      let hidden=document.getElementById('hidden2');
        hidden.style.display='block';
        setTimeout(() => {
          hidden.style.display='none';
        },1000);
    }
  }
  addbtn.addEventListener("click",function required(event){
    event.preventDefault();
    let employeeId=document.getElementById("eid").value;
    let Name=document.getElementById("name").value;
    let position=document.getElementById("position").value;
    let email=document.getElementById("address").value;
    let phone=document.getElementById("phone").value;
    let message=document.getElementById("hidden1");
  
    if(employeeId===""){
         message.innerHTML="employee ID is required";
         message.style.color="red";
    }else if(Name===""){
      message.innerHTML="Name is required";
      message.style.color="red";
    }
    else if(position===""){
      message.innerHTML="Position is required";
      message.style.color="red";
    }
   
    else if(email===""){
      message.innerHTML="Email is required";
      message.style.color="red";
    }
    else if(phone===""){
      message.innerHTML="Phone is required";
      message.style.color="red";
    }
    else if(phone.length!==10){
        message.innerHTML="Please enter a valid number which lenth is 10";
        message.style.color="red";
    }
    else{
      fullname(event);   
    }
  })
