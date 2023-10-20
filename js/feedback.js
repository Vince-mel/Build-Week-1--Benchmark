let rating = 0;

let setRating = function (stars) {
  rating = stars;
  let starElements = document.getElementsByClassName("star");
  for (let i = 0; i < starElements.length; i++) {
    starElements[i].classList.remove("selected");
    if (i < stars) {
      starElements[i].classList.add("selected");
    }
  }
};

let submitFeedback = function () {
  let comment = document.getElementById("comment").value;
  // Invia il punteggio
  alert("Thanks you for " + rating + " stars rating.");
  alert(`Thanks for your comment : ${comment} `);
};
