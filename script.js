function formSubmission(event) {
  var contactNumber = document.getElementById("contact").value;
  var contactValue = contactNumber.trim();
  if (contactValue.length < 9) {
    alert("Mobile number must be at least 9 characters long.");
    // Prevent form submission
    event.preventDefault();
  } else if (!contactNumber) {
    alert("Please enter your mobile number");
  } else {
    window.location.href = "registration.html";
  }
}

function userRegistration() {
  var name = document.getElementById("username").value;
  var month = document.getElementById("birth-month").value;
  var date = document.getElementById("birth-date").value;
  var year = document.getElementById("birth-year").value;

  var birthday = date + "/" + month + "/" + year;

  var email = document.getElementById("useremail").value;
  var noEmailChecked = document.getElementById("noemail").checked;

  if (name && birthday && (email || noEmailChecked)) {
    // Save credentials to local storage
    localStorage.setItem("name", name);
    localStorage.setItem("birthday", birthday);

    // Set up logic for whether or not email is provided
    if (email) {
      localStorage.setItem("email", email);
    } else {
      localStorage.setItem("email", "No email address provided");
    }
    window.location.href = "userdisplay.html";
  } else {
    alert("Please fill in all the required fields.");
  }
}
