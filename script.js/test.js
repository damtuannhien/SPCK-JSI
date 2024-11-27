// Mảng các câu hỏi tự luận
// const questions = [
//     {
//       question: "Hãy giải thích nguyên lý hoạt động của động cơ điện?",

//        correct: "Không biết"
//     },
//     {
//       question: "Bạn nghĩ thế nào về tác động của công nghệ đối với xã hội hiện đại?",
//     },
//     {
//       question: "Mô tả quá trình quang hợp của cây xanh.",
//     },
//     {
//       question: "Bạn cho rằng giáo dục trực tuyến có hiệu quả như thế nào?",
//     },
//     {
//       question: "Nêu ra một số giải pháp bảo vệ môi trường trong tương lai?",
//     }
//   ];
import { db, auth } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";


const loadHistory = async () => {
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

auth.onAuthStateChanged(async function (user) {
    if (user) {
        const history = await loadHistory()

        // Chọn câu hỏi ngẫu nhiên
        let currentQuestionIndex = Math.floor(Math.random() * history.length);

        function loadQuestion() {
            const question = history[currentQuestionIndex];

            // Hiển thị câu hỏi
            document.getElementById("question-text").textContent = question.source_word;

            // Xóa nội dung đã nhập trong ô trả lời
            document.getElementById("answer-input").value = "";
            ;
        }

        // Nút để chuyển sang câu hỏi tiếp theo
        document.getElementById("next-button").onclick = function () {
            // Chọn câu hỏi ngẫu nhiên mới
            currentQuestionIndex = Math.floor(Math.random() * history.length);

            // Tải câu hỏi tiếp theo
            loadQuestion();
        }

        // Tải câu hỏi đầu tiên khi trang được tải
        window.onload = loadQuestion;

    } else {
        // No user is signed in.
    }
});

