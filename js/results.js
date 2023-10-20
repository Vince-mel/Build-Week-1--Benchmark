const searchParams = new URLSearchParams(window.location.search);
const finalScore = searchParams.get("score");

const numOfCorrect = document.getElementById("numOfCorrect");
const numOfWrong = document.getElementById("numOfWrong");
const examScore = document.getElementById("circle-exp");
const wrongPerc = document.getElementById("wrongPerc");
const correctPerc = document.getElementById("correctPerc");

numOfCorrect.innerText = finalScore;
numOfWrong.innerText = 10 - finalScore;
correctPerc.innerText = `${finalScore * 10} %`;
correctPerc.style.fontWeight = "700";
wrongPerc.innerText = `${100 - finalScore * 10} %`;
wrongPerc.style.fontWeight = "700";
if (finalScore > 5) {
  examScore.innerHTML = ` <div class="inter">
<span> Congratulations!</span>

<b>You passed the Exam.</b>
</div>
<div id="certificate">
We'll send you the certificate in few minutes. <br />
Check your email (including promotions / spam folder)
</div>`;
}

if (finalScore < 6) {
  examScore.innerHTML = ` <div class="inter">
    <span> We're sorry!</span>

    <b class="inter">You have not passed the Exam.</b>
  </div>
  <div id="certificate" class="inter">
    Please if you want to retry the benchmark send us an email.<br />
    We will explain to you how you can retry it 
  </div>`;
  const sorry = document.querySelector("#circle-exp>div>b");
  sorry.style.color = "red";
}
let final = finalScore * 10;
let valuesuccess = final;

let res = document.getElementById("circ");

let grafico = function () {
  res.innerHTML = `
    <path
    class="circle-bg"
    d="M18 2.0845
    a 15.9155 15.9155 0 0 1 0 31.831
    a 15.9155 15.9155 0 0 1 0 -31.831"
  />
  <path
    class="circle_1"
    stroke-dasharray="${valuesuccess}, 100"
    d="M18 2.0845
    a 15.9155 15.9155 0 0 1 0 31.831
    a 15.9155 15.9155 0 0 1 0 -31.831"
  /> `;
};

grafico();

const btn = document.getElementById("rate-btn");
btn.addEventListener("click", () => {
  window.location.assign("./feedback.html");
});
