function adduser(){
    username=document.getElementById("user_name").nodeValue
    localStorage.setItem("username",username);
    window.location="kwitter_room.html";

}