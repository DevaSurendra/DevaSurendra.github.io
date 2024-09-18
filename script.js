// script.js
// Importation des bibliothèques Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialisation de Firebase
firebase.initializeApp({
  apiKey: "AIzaSyB-Z71zLvWl5-cp31osyhobSr1wq0Xaylw",
  authDomain: "tarasschat.firebaseapp.com",
  projectId: "tarasschat",
});

// Récupération de la base de données Firestore
const db = firebase.firestore();

// Fonction pour ajouter un nouveau tweet
function addTweet(tweetText) {
  db.collection('tweets').add({
    text: tweetText,
    createdAt: new Date(),
  });
}

// Fonction pour récupérer les tweets
function getTweets() {
  db.collection('tweets').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  });
}

// Écouteur d'événement pour le bouton de tweet
document.getElementById('tweet-btn').addEventListener('click', (e) => {
  e.preventDefault();
  const tweetText = document.getElementById('tweet-input').value;
  addTweet(tweetText);
  document.getElementById('tweet-input').value = '';
});