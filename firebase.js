
/*

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

     */


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAyOcQgwuDwD-8_XX6yc3Lw-20NTprEJHI",
    authDomain: "fir-b6f20.firebaseapp.com",
    databaseURL: "https://fir-b6f20.firebaseio.com",
    projectId: "fir-b6f20",
    storageBucket: "fir-b6f20.appspot.com",
    messagingSenderId: "313681190557",
    appId: "1:313681190557:web:54c53c921b8b4347a3fe74"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signIn(){
      var email = document.getElementById("email");
      var password = document.getElementById("password");

      const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
      promise.catch(e => alert(e.message));
      
      alert("Signed In");

  }