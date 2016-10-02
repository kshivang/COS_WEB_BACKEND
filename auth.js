function signIn(){

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  console.log(email);
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    console.log(error); // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

  });

  var user = firebase.auth().currentUser;
  var uid;

  if (user != null) {
    uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                     // this value to authenticate with your backend server, if
                     // you have one. Use User.getToken() instead.
  }
  //console.log(document.getElementById("test").innerHTML);
  //document.getElementById("test").innerHTML = uid;
  window.location.href = 'home_2.html' + '?uid=' + uid;
}
