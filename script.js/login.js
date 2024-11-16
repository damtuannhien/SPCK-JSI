import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js"; 

let email_input = document.getElementById("email_input");
let password_input = document.getElementById("password_input");

// Lấy tham chiếu đến nút đăng nhập
let login_button = document.getElementById("login_button");

// Gắn sự kiện "click" cho nút đăng nhập
login_button.addEventListener("click", function (event) {
    event.preventDefault();
    // Kiểm tra nếu tên đăng nhập và mật khẩu đúng

    const email = email_input.value;
    const password = password_input.value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in             
            const user = userCredential.user;
            console.log(user);
            location ="./home2.html"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
});