function po()
{
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);
     
     window.location = "index.html";
}

function addUser()
{
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);
     
     window.location = "sweet_room.html";
}

const firebaseConfig = 
{
    apiKey: "AIzaSyAN1K3cZ_NtqbmraM4fXdgQ86Jx410EEB4",
    authDomain: "sweet-5ff54.firebaseapp.com",
    projectId: "sweet-5ff54",
    storageBucket: "sweet-5ff54.appspot.com",
    messagingSenderId: "1092819787454",
    appId: "1:1092819787454:web:6a0dd4f93bec92cd2008ef"
};

const app = initializeApp(firebaseConfig);

function htmlTag1()
{
   
   setItem(firebaseConfig);
}