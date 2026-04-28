// 🔄 تغيير الصفحات
function showSection(id) {
  let sections = document.querySelectorAll(".section");

  sections.forEach(sec => {
    sec.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

// 👋 زر تجربة
function hello() {
  alert("Hello Developer 🔥");
}