let password = document.getElementById("password");
let message = document.getElementById("message");
let stren = document.getElementById("stren");

password.addEventListener('input', () => {
  if (password.value.length > 0) {  // Fix: nodeValue -> value
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }

  if (password.value.length < 8) {
    message.style.color = "red";
    password.style.borderColor = "red";
    stren.innerHTML = "Weak"; // Fix: str -> stren
  } else if (password.value.length >= 8 && password.value.length < 12) {
    message.style.color = '#CD5700';
    password.style.borderColor = '#CD5700';
    stren.innerHTML = "Medium"; // Fix: str -> stren
  } else if (password.value.length >= 12 && /[0-9]/.test(password.value) && /[!@#$%^&*]/.test(password.value)) {
    message.style.color = "green";
    password.style.borderColor = "green";
    stren.innerHTML = "Strong"; 
  }
});
function data(){
  let password = document.getElementById("password").value;
  let id = document.getElementById("id").value;
  if(password === '' || id === ''){
    alert("Please enter your ID and password");
    return false;
  }else if(password.length < 12 || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)){
    alert("Password must be at least 12 characters long and contain numbers and special characters");
    return false;
  }else{
    return true;
  }
}

// Remove the form submission prevention for forgot password link
document.getElementById('forgot-password').onclick = function() {
  location.href = 'index3.html';
  return false;
};

