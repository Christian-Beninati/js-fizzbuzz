// console.log('JS OK')

// Recupero l'elemento contenitore nel DOM
const container = document.getElementById("fizzbuzz-container");

// Creo <ul> 
const list = document.createElement("ul");
// list.classList.add('list-unstyled')

// Aggiungo <ul> al container
container.appendChild(list);

//   Genero gli elementi
for (let i = 1; i <= 100; i++) {

  // Assegno numero corrente a output
  let output = i;
  
  // Se il numero è multiplo di 3 e 5, assegno "FizzBuzz" a output
  if (i % 3 === 0 && i % 5 === 0) {
    output = "FizzBuzz";
  // Se il numero è multiplo di 3, assegno "Fizz" a output
  } else if (i % 3 === 0) {
    output = "Fizz";
 // Se il numero è multiplo di 5, assegno "Buzz" a output
  } else if (i % 5 === 0) {
    output = "Buzz";
  } 
  
  // Creo un nuovo elemento <li>
  const listItem = document.createElement("li");
  // Imposto il contenuto di <li> come output   
  listItem.append(output);

  // Aggiungo le classe agli all'elementi <li> in base al valore
  if (output === "FizzBuzz") {
    listItem.classList.add("fizzbuzz");
  } else if (output === "Fizz") {
    listItem.classList.add("fizz");
  } else if (output === "Buzz") {
    listItem.classList.add("buzz");
  } else {
    listItem.classList.add("number");
  }

  // Aggiungo l'elemento <li> come figlio dell'elemento <ul>
  list.appendChild(listItem);
}