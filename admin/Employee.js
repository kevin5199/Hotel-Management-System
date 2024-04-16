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
    const app = initializeApp(firebaseConfig);

    import{getDatabase,ref,child,onValue,get,remove}
    from"https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
    const xy=getDatabase();

// ----------filling the table---------------------//

var tbody=document.getElementById("employees");
function AddItemToTable(id,name,position,Address,Phone){
  let trow=document.createElement("tr");
  let td1=document.createElement('td');
  let td2=document.createElement('td');
  let td3=document.createElement('td');
  let td4=document.createElement('td');
  let td5=document.createElement('td');
  let td6=document.createElement('td');
 let button=document.createElement('button');
 button.style.border='none';


  td1.innerHTML=id;
  td2.innerHTML=name;
  td3.innerHTML=position;
  td4.innerHTML=Address;
  td5.innerHTML=Phone;
  button.innerHTML = `<i class="fa-solid fa-trash"></i>`;

  button.addEventListener('click', function() {
    DeleteItem(id);
  });
  
  td6.appendChild(button);
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);
 

  tbody.appendChild(trow);

}
function DeleteItem(id) {
  remove(ref(xy,'employeeForm/'+id)).then(()=>{
    alert("Employee Data deleted successfully");
    window.location.reload();
}).catch((error)=>{
    alert("unsuccessfull");
    console.log(error);
});

}
function AddAllItemsOfEmployee(TheEmployee){
  tbody.innerHTML="";
  TheEmployee.forEach(element => {
    AddItemToTable(element.id,element.name,element.position,element.Address,element.Phone)
  });
}

(function GetAllDataOnce() {
  const xbref = ref(xy);
  get(child(xbref, "employeeForm"))
    .then((snapshot) => {
      var employees = [];
      snapshot.forEach(childSnapshot => {
        employees.push({ id: childSnapshot.key, ...childSnapshot.val() }); // Include the key (id) of each item
      });
      AddAllItemsOfEmployee(employees);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
      alert("Error fetching data");
    });
})();








