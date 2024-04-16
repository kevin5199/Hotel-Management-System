const employeeForm = document.querySelector('#employeeForm');
document.querySelector('#passForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const passStatus = document.querySelector('#passStatus');
  const pass =document.getElementById("password").value;
  const userid=document.getElementById("userid").value;
  if (userid=='Kevin_171'&& pass === '1234') {
    window.location.assign("./admin-data.html")
  }else if(userid!='Kevin_171'&&  pass === '1234'){
    passStatus.textContent = 'Incorrect User ID';
  }else if(userid =='Kevin_171'&&  pass != '1234'){
    passStatus.textContent = 'Incorrect Password';
  } else{
    passStatus.textContent = 'Incorrect User ID and password';
  }  
});

function hello(){
  window.location.replace("../index.html");
  
}




