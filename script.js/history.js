import { db, auth } from "./firebase.js";
import { doc, updateDoc, arrayUnion, getDoc } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js"; 

export const saveHistory = (data) => {
    const docRef = doc(db, 'History', auth.currentUser.uid);
    updateDoc(docRef, {history:arrayUnion(data)});  
}

export const loadHistory = async () => {
    const docRef = doc(db, 'History', auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const data = docSnap.data()
        console.log("Document data:", data);
        return data;
    } else {
    // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
  
}

auth.onAuthStateChanged(async function(user) {
    if (user) {
        const data = await loadHistory();
        document.getElementById('historyList').innerHTML
    } else {
      // No user is signed in.
    }
  });
