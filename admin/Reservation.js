import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
    
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

    import{getDatabase,ref,child,onValue,get,remove}
    from"https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
    const xy=getDatabase();

        
// ----------filling the table---------------------//

var tbody1=document.getElementById("reservations");
function AddItemToResevation(name,numberofpeople,room,entry,exit,total){
  let trow=document.createElement("tr");
  let td1=document.createElement('td');
  let td2=document.createElement('td');
  let td3=document.createElement('td');
  let td4=document.createElement('td');
  let td5=document.createElement('td');
  let td6=document.createElement('td');
  let td7=document.createElement('td');
  let button=document.createElement('button');
  button.style.border='none';


 
  td1.innerHTML=name;
  td2.innerHTML=numberofpeople;
  td3.innerHTML=room;
  td4.innerHTML=entry;
  td5.innerHTML=exit;
  td6.innerHTML=total;
  button.innerHTML = `<i class="fa-solid fa-trash"></i>`;

  button.addEventListener('click', function() {
    // Call the function to delete the item from Firebase
    DeleteItem(name);
  });

  td7.appendChild(button);
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);
  trow.appendChild(td7);
  

  tbody1.appendChild(trow);

}
function DeleteItem(name) {
  remove(ref(xy,'Reservation/'+name)).then(()=>{
    alert(name+" Reservation  deleted successfully");
    window.location.reload();
}).catch((error)=>{
    alert("unsuccessfull");
    console.log(error);
});
}
function AddAllItemsOfReservation(Reservation){
  tbody1.innerHTML="";
  Reservation.forEach(element => {
    AddItemToResevation(element.Name,element.NumberOfPeople,element.Room,element.Entry,element.Exit,element.Totle)
  });
}


// ---------------------GETTING ALL DATA------------------//

(function GetAllOnce(){
    const dbref=ref(xy);
    get(child(dbref,"Reservation"))  
    .then((snapshot)=>{
        var Reservation=[];
        snapshot.forEach(childSnapshot=>{
          
            Reservation.push(childSnapshot.val());
          
        });
        AddAllItemsOfReservation(Reservation);
    })
})();


