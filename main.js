// declare variables 

var u, p;
u = "admin";
p = "101112";

function LoginUser() {
    let Grade = document.getElementById("signin").value;

    let uinput = document.getElementById("user").value;
    let pinput = document.getElementById("pass").value;
    // let fb = document.getElementById("fb");

        if (u === uinput && p === pinput) {
        m = "Login successful! Welcome User";
        } 

        else {
        m = "Status: Please enter the correct password/username";    
        }

        document.getElementById("message").innerHTML = m;
}
