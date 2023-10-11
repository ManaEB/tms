const searchInput = document.getElementById("search");
const questions = document.querySelectorAll(".question");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  questions.forEach((question) => {
    const questionTitle = question
      .querySelector(".question-title")
      .textContent.toLowerCase();
    if (questionTitle.includes(query)) {
      question.classList.add("active");
    } else {
      question.classList.remove("active");
      question.classList.add("deactive");
    }
  });

  if (searchInput.value == "") {
    questions.forEach((question) => {
      question.classList.remove("deactive");
    });
  }
});
