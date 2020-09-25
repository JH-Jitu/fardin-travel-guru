import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () =>{
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleGoogleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
  .then(res => {
    const {displayName, photoURL, email} = res.user;
    var user = res.user;
    const signedInUser ={
      isSignedIn: true,
      name: displayName,
      photo: photoURL,
      email: email
    }
    return user;
  })
}

export const handleFacebookLogin = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider).then(function(result) {
      var user = result.user;
      user.success = true;
      return user;
    })
  }

  export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res =>{
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
      updateUserName(name);
    return newUserInfo;
    })
    .catch(error => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
  }

  export const signInWithEmailAndPassword = (email, password)=> {
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res =>{
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
      return newUserInfo;
    })
    .catch(error => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
  }

const updateUserName = name=> {
  const user = firebase.auth().currentUser;

  user.updateProfile({
    displayName: name
  });
  }

  export const resetPassword = email => {
      var auth = firebase.auth();
  auth.sendPasswordResetEmail(email).then(function() {
      var message = "Check your Email"
      console.log(message)
  })
  }