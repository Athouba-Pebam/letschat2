
//ADD YOUR FIREBASE LINKS HERE

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


    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

    function addRoom(){

      room_name = document.getElementById("room_name");

            firebase.database().ref("/").child(room_name).update({
            purpose : "Athouba"
      });

      window.location = "kwitter_page.html";
    }
     function getData() 

              {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name - " + Room_names);
       row = "<div class = 'room_name' id =" + Room_names + "onclick = ' redirectToRoomName(this.id)>" + Room_names + "</div> <hr>" ;
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){

      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  }
