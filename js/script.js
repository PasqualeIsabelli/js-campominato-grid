/* Eserczio: Campo Minato
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quiandi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con "facile" => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con "medio" => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con "difficile" => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/


// VARIABILI (richiamano i dati inseriti nell'HTML)

/**
 * @type {HTMLSelectElement}
 */
const squareNumbersSelect = document.querySelector("[name='squareNumbers']");
const btnStart = document.getElementById("btn-start");

/**
 * @type {HTMLElement}
 */
const gridContainer = document.querySelector(".grid-container");


// SCATENO UN EVENTO AL CLICK
btnStart.addEventListener("click", function () {
  gridContainer.innerHTML = "";
  // Prendo il valore inserito nella select e lo salvo in una variabile
  const squareNumbers = squareNumbersSelect.value;
  // Stampo il valore della select per vedere se funziona
  //console.log(squareNumbers);

  // INVOCO LA FUNZIONE: Genero la griglia al click inserendogli il numero di quadrati che seleziona l'utente (valore preso tramite variabile)
  const gridSize = createGrid(squareNumbers);
  // Stampo il risultato per vedere se funziona
  //console.log(gridSize);

  //INVOCO LA FUNZIONE: Aggiunge all'HTML i quadrati
  printGrid(gridContainer, gridSize);


});


/**
 * FUNZIONE (Genero i quadrati della griglia)
 * @param {string} squareContent testo inserito all'interno dei quadrati
 * @param {number} squareNumbers numero dei quadrati all'interno del container
 * @returns {HTMLDivElement}
*/
function createSquare(squareContent, squareNumbers) {
  // Uso il createElement per creare i div che saranno i quadrati
  const square = document.createElement("div");

  // Calcolo il numero di quadrati per riga
  const squareRow = Math.sqrt(squareNumbers);

  // Aggiungo classe e contenuto all'elemento
  square.classList.add("grid-square", "d-flex", "align-items-center", "justify-content-center", "border", "border-dark");
  square.innerHTML = squareContent;
  // Calcolo il numero di quadrati da inserire
  square.style.flexBasis = `calc(100% / ${squareRow})`

  // Scateno un evento al click (calbio colore al quadrato al click)
  square.addEventListener("click", function() {
    // Aggiungo la classe bg-primary al posto di quella che c'è già
    square.classList.toggle("bg-primary");
  })

  // Ritorno il valore di square
  return square;
}


/**
 * FUNZIONE (Genero la griglia contenente i quadrati)
 * @param {number} squareNumber numero dei quadrati da creare dentro la griglia
 * @returns {HTMLDivElement[]}
*/
function createGrid(squareNumber) {
  // Creo un array dove mettere i quadrati all'interno
  const grid = [];

  // CICLO FOR (sistemazione dei quadrati)
  for (i = 1; i <= squareNumber; i++) {
    // Salvo l'output di questa funzione in una variabile
    const newSquare = createSquare(i, squareNumber);
    // Pusho il risultato nell'array
    grid.push(newSquare);
  }
  // Ritorno il valore di grid
  return grid;
}


/**
 * FUNZIONE (Stampo la griglia all'interno dell'HTML)
 * @param {HTMLElement} container
 * @returns {HTMLDivElement[]}
 */
function printGrid(container, squareSize) {
  for (let i = 0; i < squareSize.length; i++) {
    container.append(squareSize[i]);
  }
}