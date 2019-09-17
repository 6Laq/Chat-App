import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCCcoVvOiXWeSg_fCEUUq29z6tSFS4Ywi4",
  authDomain: "messageme-f1d97.firebaseapp.com",
  databaseURL: "https://messageme-f1d97.firebaseio.com/",
  projectId: "messageme-f1d97",
  storageBucket: "gs://messageme-f1d97.appspot.com"
};

firebase.initializeApp(config);

export default firebase;
