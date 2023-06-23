var firebaseConfig = {
    apiKey: "AIzaSyDNZb5Vc5eLoMScOZ5bPOBlGPARPsTssTI",
    authDomain: "p-94-781f9.firebaseapp.com",
    databaseURL: "https://p-94-781f9-default-rtdb.firebaseio.com",
    projectId: "p-94-781f9",
    storageBucket: "p-94-781f9.appspot.com",
    messagingSenderId: "940811149832",
    appId: "1:940811149832:web:b93941d31d69210fc067bd"
  };

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
