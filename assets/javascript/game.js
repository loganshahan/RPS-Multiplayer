var winCounter = 0;
var lossCounter = 0;
var choices = ["rock", "paper", "scissors"];
var config = {
    apiKey: "AIzaSyD8gi7Z_8fD1I7Nf-DAw8wX-ifoS3hvMlE",
    authDomain: "bootcampclass-42988.firebaseapp.com",
    databaseURL: "https://bootcampclass-42988.firebaseio.com",
    projectId: "bootcampclass-42988",
    storageBucket: "bootcampclass-42988.appspot.com",
    messagingSenderId: "950242360080"
  };
  firebase.initializeApp(config);
  
var database = firebase.database();