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

var tbody2=document.getElementById("orders");
let orderno=0;
function AddItemToOrder(name,mainCourse,starter,drink,Date,total){
  let trow=document.createElement("tr");
  let td1=document.createElement('td');
  let td2=document.createElement('td');
  let td3=document.createElement('td');
  let td4=document.createElement('td');
  let td5=document.createElement('td');
  let td6=document.createElement('td');
  let td7=document.createElement('td');
  let td8=document.createElement('td');
  let button=document.createElement('button');
  button.style.border='none';

  td1.innerHTML=++orderno;
  td2.innerHTML=name;
  td3.innerHTML=mainCourse;
  td4.innerHTML=starter;
  td5.innerHTML=drink;
  td6.innerHTML=Date;
  td7.innerHTML=total;
  button.innerHTML = `<i class="fa-solid fa-trash"></i>`;

  button.addEventListener('click', function() {
    // Call the function to delete the item from Firebase
    DeleteItem(name);
  });

  td8.appendChild(button);
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);
  trow.appendChild(td7);
  trow.appendChild(td8);

  

  tbody2.appendChild(trow);

}

function DeleteItem(name) {
  // Reference to the specific item in the database
  
  // Remove the item from the database
  remove(ref(xy,'order/'+name)).then(()=>{
    alert(name+" Order deleted successfully");
    window.location.reload();
}).catch((error)=>{
    alert("unsuccessfull");
    console.log(error);
});
}

function AddAllItemsOfOrder(Order){
  tbody2.innerHTML="";
  Order.forEach(element => {
    AddItemToOrder(element.Name,element.MainCourse,element.Starter,element.Drink,element.Date, element.Totle,)
  });
}


// ---------------------GETTING ALL DATA------------------//

(function GetAllOnce1(){
    const dbref=ref(xy);
    get(child(dbref,"order/"))  
    .then((snapshot)=>{
        var Orders=[];
        snapshot.forEach(childSnapshot=>{
          
          Orders.push(childSnapshot.val());
          
        });
        AddAllItemsOfOrder(Orders);
    })
})();



