const ball = document.getElementById("ball");
const answer = document.getElementById("answer");

const responses = [
  "Yes",
  "No",
  "Maybe",
  "Ask again later"
];

ball.addEventListener("click", function () {
  // Spin effect
  ball.classList.add("spin");

  setTimeout(() => {
    ball.classList.remove("spin");
  }, 1000);

  // Random answer
  const random = responses[Math.floor(Math.random() * responses.length)];
  answer.textContent = random;
});