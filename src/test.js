import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("wpzwhdB1b3vNbmOua7Du")
  .collection("cardItems")
  .doc("jgrV4D9rCa7c6BwooILs");

firestore.doc("/users/wpzwhdB1b3vNbmOua7Du/cardItems/jgrV4D9rCa7c6BwooILs");
firestore.collection("/users/wpzwhdB1b3vNbmOua7Du/cardItems");
