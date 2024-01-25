//Variabler för scoreboard.
let userScore = 0;
let computerScore = 0;

//Skapa en funktion av spelet, för att kunna anropa vid knapptryck.
function startGame() {
  //Generera randomindex för datorn. Genom Array.
  const choices = ["sten", "sax", "påse"];
  //Inbyggd funktion som genererar och hämtar en slumpmässig index i arrayen.
  const computerRandom = Math.floor(Math.random() * choices.length);
  const computerAnswer = choices[computerRandom]; // Spara valet i en ny variabel!

  //Hämta användarens val via knapp-id och lägg i variabeln.
  const userAnswer = this.id;

  if (userAnswer == computerAnswer) {
    alert("Det blev lika!");
  } else if (
    (userAnswer === "sten" && computerAnswer === "sax") ||
    (userAnswer === "påse" && computerAnswer === "sten") ||
    (userAnswer === "sax" && computerAnswer === "påse")
  ) {
    alert("Grattis, du vann!");
    userScore++; //lägg till 1 vid vinst.
  } else {
    alert("Du förlorade!");
    computerScore++;
  }
  //Uppdatera scoreboard via html:
  document.getElementById("user-score").textContent = userScore;
  document.getElementById("computer-score").textContent = computerScore;
}

//Skapa en lista med alla element som innehåller button
//iterera genom listan
//Lägg till event-lyssnare för knapparna som triggar igång funktionen.
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", startGame);
});
