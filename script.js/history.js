import { db, auth } from "./firebase.js";
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js"; 

export const saveHistory = (data) => {
    const docRef = doc(db, 'History', auth.currentUser.uid);
    getDoc(docRef).then((docSnap) => {
        if (docSnap.exists()) {
            updateDoc(docRef, {history:arrayUnion(data)}); 
        }
        else {
            setDoc(docRef, {history:arrayUnion(data)});  
        }
    })
}

export const loadHistory = async () => {
    const docRef = doc(db, 'History', auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const data = docSnap.data()
        console.log("Document data:", data);
        return data.history;
    } else {
    // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
  
}

auth.onAuthStateChanged(async function(user) {
    if (user) {
        const data = await loadHistory();
        const historyList = document.getElementById("historyList")

        data.forEach(element => {
            let li = document.createElement("li")
            li.textContent = element.source_word + ": " + element.target_word
            historyList.appendChild(li)
        });
    } else {
      // No user is signed in.
    }
  });
