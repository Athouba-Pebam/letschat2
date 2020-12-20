//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyApmCiiigaVpXZmDUXG2_obLUfqM5b3fMU",
    authDomain: "kwitter-76980.firebaseapp.com",
    databaseURL: "https://kwitter-76980-default-rtdb.firebaseio.com",
    projectId: "kwitter-76980",
    storageBucket: "kwitter-76980.appspot.com",
    messagingSenderId: "166901820257",
    appId: "1:166901820257:web:7b92bdfd0ea930b9a2b320",
    measurementId: "G-5FPJPMF2YM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send(){

    msg = document.getElementById("msg").value;;
    firebase.database().ref(room_name).push({
      name : user_name,
      message : msg,
      like : 0
    })

    document.getElementById("msg").value = "";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
