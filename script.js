// ================== عداد الزوار ==================
document.addEventListener("DOMContentLoaded", () => {
  let visits = localStorage.getItem("visits") || 0;
  visits++;
  localStorage.setItem("visits", visits);
  const counter = document.getElementById("visitor-count");
  if (counter) counter.innerText = visits;
});

// ================== EmailJS إرسال النموذج ==================
function sendEmail(e) {
  e.preventDefault();
  emailjs.sendForm('service_47ymd58', 'template_3ik5vyw', e.target, 'YOUR_PUBLIC_KEY_HERE')
    .then(() => {
      alert("✅ تم إرسال الطلب بنجاح!");
      e.target.reset();
    }, (error) => {
      alert("❌ حدث خطأ! حاول مرة أخرى.");
      console.error(error);
    });
}

const form = document.getElementById("designForm");
if (form) {
  form.addEventListener("submit", sendEmail);
}

// ================== حماية الصور ==================
document.addEventListener("contextmenu", e => {
  if (e.target.tagName === "IMG") e.preventDefault();
});
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("dragstart", e => e.preventDefault());
});

// ================== تأثير الصور عند الضغط ==================
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    img.classList.add("active-zoom");
    setTimeout(() => img.classList.remove("active-zoom"), 1000);
  });
});

// ================== نظام تسجيل دخول بسيط ==================
const adminLogin = () => {
  const password = prompt("أدخل كلمة المرور للدخول كإداري:");
  if (password === "admin123") {
    alert("✅ مرحبًا بك، تم الدخول بنجاح!");
    window.location.href = "dashboard.html"; // عدلها لاحقًا
  } else {
    alert("❌ كلمة المرور خاطئة!");
  }
};

const loginBtn = document.getElementById("adminLoginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", adminLogin);
}
