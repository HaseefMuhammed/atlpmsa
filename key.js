const form = document.getElementById('login-form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent form submission
  loginAdmin();
});

function loginAdmin(){
  let username = document.getElementById("inputUserName").value;
  let password = document.getElementById("inputPassword").value;

  if(username == "admin" && password == "atl@pmsa"){
      window.location.href = "dashboard-atl.html";
  }else{
      alert("Invalid username or password");
      window.location.reload();
  }
}