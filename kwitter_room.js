var firebaseConfig = {
      apiKey: "AIzaSyCrHEptxoOU1VvIEqAGmPFTnNTRV0ZOVlo",
      authDomain: "kwitter-6321d.firebaseapp.com",
      databaseURL: "https://kwitter-6321d-default-rtdb.firebaseio.com",
      projectId: "kwitter-6321d",
      storageBucket: "kwitter-6321d.appspot.com",
      messagingSenderId: "1038504956317",
      appId: "1:1038504956317:web:1d4f6d33672c1d63769f74",
      measurementId: "G-TE594EMHC6"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome " + user_name;





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
