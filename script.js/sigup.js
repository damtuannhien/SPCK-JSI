// Import the functions you need from the SDKs you need
import { auth } from "./firebase.js";
import {createUserWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

let email_input = document.getElementById("email_input");
let password_input = document.getElementById("password_input");
let confirmPassword_input = document.getElementById("confirmPassword_input");
let agree_checkbox = document.getElementById("agree_checkbox");

// Lấy tham chiếu đến nút đăng ký
let signup_button = document.getElementById("signup_button");

// Gắn sự kiện "click" cho nút đăng ký
signup_button.addEventListener("click", function(event) {
    event.preventDefault()
    // Kiểm tra nếu tất cả các trường đã được điền
    if (email_input.value === "" || password_input.value === "" || confirmPassword_input.value === "") {
        event.preventDefault(); // Ngăn chặn hành động mặc định của biểu mẫu (chuyển hướng)
        alert("Vui lòng điền đầy đủ thông tin"); // Hiển thị thông báo yêu cầu điền đầy đủ thông tin
        return;
    }

    // Kiểm tra nếu mật khẩu và xác nhận mật khẩu khớp
    if (password_input.value !== confirmPassword_input.value) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của biểu mẫu (chuyển hướng)
        alert("Mật khẩu xác nhận không khớp"); // Hiển thị thông báo mật khẩu không khớp
        return;
    }

    // Kiểm tra nếu người dùng đã đồng ý với điều khoản và điều kiện
    if (!agree_checkbox.checked) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của biểu mẫu (chuyển hướng)
        alert("Bạn phải đồng ý với các điều khoản và điều kiện"); // Hiển thị thông báo yêu cầu đồng ý điều khoản
        return;
    }

    const email = email_input.value;
    const password = password_input.value;
    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Creating Account...")
            await signOut(auth)
            location ="./login.html"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
});