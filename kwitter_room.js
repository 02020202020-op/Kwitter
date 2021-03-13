
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCSid0uGjLYApvsA_Dn9hZ95_lzQnBSTa8",
      authDomain: "kwitter-6a84f.firebaseapp.com",
      databaseURL: "https://kwitter-6a84f-default-rtdb.firebaseio.com",
      projectId: "kwitter-6a84f",
      storageBucket: "kwitter-6a84f.appspot.com",
      messagingSenderId: "399035738976",
      appId: "1:399035738976:web:0703ca7159fd37f1c98c05",
      measurementId: "G-7QXYK5VFX1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name")
  document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
          });
        
            localStorage.setItem("room_name", room_name);
            
            window.location = "kwitter_page.html";
        }
        
        function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
               Room_names = childKey;
               console.log("Room Name - " + Room_names);
              row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
              document.getElementById("output").innerHTML += row;
            });
          });
        
        }
        
        getData();
        
        function redirectToRoomName(name)
        {
          console.log(name);
          localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
        }
function logout(){
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location="kwitter.html"
}
      

