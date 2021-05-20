import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC5fefyl8YV2FUNvjtvDMnTQqJarsET_pk",
    authDomain: "ciao-95dad.firebaseapp.com",
    projectId: "ciao-95dad",
    storageBucket: "ciao-95dad.appspot.com",
    messagingSenderId: "625486991760",
    appId: "1:625486991760:web:4842c25da2989c31742315",
    measurementId: "G-TH2007Q16B"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const userSnap = await userRef.get();
    if (!userSnap.exists) {
        const {displayName, email} = userAuth;
        const created_at = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                created_at,
                ...additionalData
            })
        } catch (e) {
            console.log('error creating user', e.message);
        }
    }
    // console.log(userSnap.exists);
    return userRef;
};

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj =>{
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
});
    return await batch.commit();
};

export const convertCollectionsSnapShotToMap = collectionsSnapshot => {
    const transformedCollectionsArray = collectionsSnapshot.docs.map(doc => {
        const {title, items} =doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollectionsArray.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})

};

export const getCurrentUserAuth = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
    }, reject)
    });
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleprovider = new firebase.auth.GoogleAuthProvider();
googleprovider.setCustomParameters({prompt:'select_account'});
// export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;