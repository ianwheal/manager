import firebase from 'firebase';

const firebaseInit = () => {
  const config = {
    apiKey: 'AIzaSyCxUIM_d8OyHROFKc1OFM0Hoowz_VOMW80',
    authDomain: 'manager-3c1fd.firebaseapp.com',
    databaseURL: 'https://manager-3c1fd.firebaseio.com',
    projectId: 'manager-3c1fd',
    storageBucket: 'manager-3c1fd.appspot.com',
    messagingSenderId: '133173360632'
  };

  firebase.initializeApp(config);
};

export default firebaseInit;
