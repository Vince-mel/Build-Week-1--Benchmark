const conf = document.getElementById("send");
let timeRun = 0; // Inizializza la variabile del timer
let finish = document.getElementById("timer-wrap-cover");
let circle = document.querySelector(".circle");

// Restituisci il timer a 0
function resetTimer() {
  clearInterval(interval); // Interrompi il timer esistente
  timeRun = 0;
  countdownNumberEl.textContent = timeRun;
}
const allNewBtn = () => {
  const allBtn = document.querySelectorAll(".answers button");
  for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].addEventListener("click", (e) => {
      e.preventDefault();
      allBtn[i].classList.add("inter");
      const selected = document.querySelectorAll(".selectedAnswer");
      for (let y = 0; y < selected.length; y++) {
        selected[y].classList.remove("selectedAnswer");
        selected[y].classList.remove("chosen");
      }
      allBtn[i].classList.toggle("selectedAnswer");
      allBtn[i].classList.add("chosen");

      if (allBtn[i].classList.contains("selectedAnswer")) {
        conf.classList.add("selectedBtn");
        resetTimer();
      }
    });
  }
};
allNewBtn();
const allCorrectChosen = document.getElementsByClassName("correct chosen");
const numberOfQ = document.getElementById("question-num");
const allSection = document.getElementsByClassName("questions-wrap");
const timerNum = document.getElementById("timer-num");
timerNum.innerText = 30;

const startCountdown = () => {
  const timerElement = document.getElementById("timer-num");
  seconds = 30;

  function updateTimer() {
    timerElement.textContent = seconds;
    seconds--;
    for (let i = 0; i < 10; i++) {
      if (seconds < 0 && allSection[i]) {
        clearInterval(interval);
        scorripagina();
        startCountdown();
      } else if (allSection[10].classList.contains("show")) {
        seconds = 30;
      }
      if (seconds < 10) {
        circle.style.borderTopColor = "red";
      }

      if (seconds > 10) {
        circle.style.borderTopColor = "rgb(3, 207, 207)";
      }
    }
  }
  updateTimer();
  const interval = setInterval(updateTimer, 1000);
};
startCountdown();

const showFirst = () => {
  allSection[0].innerHTML = `<form class="forms">
  <div id="question-1" class="question">
    <p class="h1">Come inizia un ciclo WHILE?</p>
  </div>
  <div class="answers inter">
    <button class="correct">while(i&lt;=10;i++)</button>
    <button>while(i&lt;=10)</button>
    <br />
    <button>while i=1 to 10</button>
    <button>None of the above</button>
  </div>
</form>`;
  allNewBtn();
};
showFirst();

const scorripagina = () => {
  if (allSection[0].classList.contains("show")) {
    numberOfQ.innerText = "2";
    allSection[0].classList.remove("show");
    allSection[1].classList.add("show");
    allSection[1].innerHTML = `<form class="forms">
    <div id="question-2" class="question">
      <p>
        Quale metodo build.in combina il testo di due stringhe e
        restituisce una nuova stringa?
      </p>
    </div>
    <div class="answers inter">
      <button>attach()</button>
      <button>append()</button> <br />
      <button class="correct">concat()</button>
      <button>None of the above</button>
    </div>
  </form>`;
    allNewBtn();
    seconds = 30;
  } else if (allSection[1].classList.contains("show")) {
    numberOfQ.innerText = "3";
    allSection[1].classList.remove("show");
    allSection[2].classList.add("show");
    allSection[2].innerHTML = `<form class="forms">
    <div id="question-3" class="question">
      <p>
        Come si scrive uno statement IF che controlli se i è uguale a 5 in
        Javascript
      </p>
    </div>
    <div class="answers inter">
      <button>if(i=5){}</button>
      <button class="correct">if(i===5){}</button> <br />
      <button>if i==5 then</button>
      <button>if i=5 then</button>
    </div>
  </form>`;
    allNewBtn();
    seconds = 30;
  } else if (allSection[2].classList.contains("show")) {
    numberOfQ.innerText = "4";
    allSection[2].classList.remove("show");
    allSection[3].classList.add("show");
    allSection[3].innerHTML = `<form class="forms">
    <div id="question-4" class="question">
      <p>Quale dei seguenti NON è un oggetto Javascript?</p>
    </div>

    <div class="answers inter">
      <button class="correct">const obj={name="John"};</button>
      <button>const obj=new Object()</button> <br />
      <button>const obj={}</button>
      <button>const obj = {name:"John"};</button>
    </div>
  </form>`;
    allNewBtn();
    seconds = 30;
  } else if (allSection[3].classList.contains("show")) {
    numberOfQ.innerText = "5";
    allSection[3].classList.remove("show");
    allSection[4].classList.add("show");
    allSection[4].innerHTML = `<form class="forms">
    <div id="question-5" class="question">
      <p>A cosa serve il primo parametro di element.addEventListener?</p>
    </div>
    <div class="answers inter">
      <button>Richiamare</button>
      <button>Chiamante</button> <br />
      <button>Invocare</button>
      <button class="correct">Tipo di evento</button>
    </div>
  </form>`;
    allNewBtn();
    seconds = 30;
  } else if (allSection[4].classList.contains("show")) {
    numberOfQ.innerText = "6";
    allSection[4].classList.remove("show");
    allSection[5].classList.add("show");
    allSection[5].innerHTML = `<form class="forms">
    <div id="question-6" class="question inter">
      <p>
        Quando si seleziona un elemento nel DOM con Javascript,si può
        ottenere o impostare ogni regola CSS con la sua proprietà di
        stile.
      </p>
    </div>
    <div class="answers">
      <button class="correct">Vero</button>
      <button>Falso</button>
    </div>
  </form>`;
    allNewBtn();
    seconds = 30;
  } else if (allSection[5].classList.contains("show")) {
    numberOfQ.innerText = "7";
    allSection[5].classList.remove("show");
    allSection[6].classList.add("show");
    allSection[6].innerHTML = `<form class="forms">
    <div id="question-7" class="question">
      <p>Quale di questi NON è un valore "altezza" valido?</p>
    </div>
    <div class="answers inter">
      <button class="correct">altezza: 100wn</button>
      <button>altezza:100px</button> <br />
      <button>altezza: 100%</button>
      <button>altezza: 100vh</button>
    </div>
  </form>`;
    allNewBtn();
    seconds = 30;
  } else if (allSection[6].classList.contains("show")) {
    numberOfQ.innerText = "8";
    allSection[6].classList.remove("show");
    allSection[7].classList.add("show");
    allSection[7].innerHTML = `        <form class="forms">
    <div id="question-8" class="question">
      <p>
        Quale tag HTML è usato per definire un foglio di stile interno?
      </p>
    </div>
    <div class="answers inter">
      <button>&lt;copione&gt;</button>
      <button>&lt;CSS&gt;</button> <br />
      <button class="correct">&lt;stile&gt;</button>
      <button>&lt;foglio di stile&gt;</button>
    </div>
  </form>`;
    allNewBtn();
    seconds = 30;
  } else if (allSection[7].classList.contains("show")) {
    numberOfQ.innerText = "9";
    allSection[7].classList.remove("show");
    allSection[8].classList.add("show");
    allSection[8].innerHTML = `<form class="forms">
    <div id="question-9" class="question">
      <p>Cosa significa "div p" come selettore?</p>
    </div>
    <div class="answers inter">
      <button class="correct">Tutti i p all'interno di un div</button>
      <button>Tutti i div all'interno di un p</button> <br />
      <button>Tutti i div e tutti i p</button>
      <button>None of the above</button>
    </div>
  </form>`;
    allNewBtn();
    seconds = 30;
  } else if (allSection[8].classList.contains("show")) {
    numberOfQ.innerText = "10";
    allSection[8].classList.remove("show");
    allSection[9].classList.add("show");
    allSection[9].innerHTML = `<form class="forms">
    <div id="question-10" class="question">
      <p>
        Quale parola chiave devo usare per dichiarare una variabile in
        Javascript?
      </p>
    </div>
    <div class="answers inter">
      <button>string</button>
      <button>int</button> <br />
      <button>id</button>
      <button class="correct">let</button>
    </div>
  </form>`;
    allNewBtn();
    seconds = 30;
  } else if (allSection[9].classList.contains("show")) {
    allSection[9].classList.remove("show");
    allSection[10].classList.add("show");
    const timerAll = document.getElementById("timer-wrap");
    timerAll.style.display = "none";
    conf.style.display = "none";
    finish.style.display = "none";
  }
  conf.classList.remove("selectedBtn");
};

conf.addEventListener("click", scorripagina);

let countdownNumberEl = document.getElementById("timer-num");
let countdown = 10;

const lastBtn = document.getElementById("checkResult");
lastBtn.addEventListener("click", () => {
  window.location.assign(`./resultPage.html?score=${allCorrectChosen.length}`);
});
