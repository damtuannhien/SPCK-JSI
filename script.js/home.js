import {auth} from "./firebase.js";

auth.onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById('user-profile').innerHTML = `<p> Hello,
        ${user.email}!</p>
        <button class="btn btn-primary text-nowrap me-2" type="button">
             <a class="nav-link" href="./home.html">log Out</a>
        </button>
        `
    } else {
      // No user is signed in.
    }
  });

// if (auth.currentUser) {
//     document.getElementById('user-profile').innerHTML = `<p> Hello,
//     ${auth.currentUser.email}!</p>
//     <button class="btn btn-primary text-nowrap me-2" type="button">
//          <a class="nav-link" href="./home.html">log Out</a>
//     </button>
//     `
// }