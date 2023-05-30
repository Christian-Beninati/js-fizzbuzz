# Project Outline

Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz” al posto del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

BONUS 1:
Crea un elemento che faccia da contenitore nel DOM e poi riempilo con i tuoi elementi via JS.
Puoi usare varie tecniche (template literals, innerHTML, append, ecc)

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Come abbiamo visto puoi usare varie tecniche (style , className, classList)

<br>
<br>

- Inizio del programma:
- Recupero l'elemento contenitore nel DOM
- Creo l'elemento `<ul>`
- Aggiungo l'elemento `<ul>` al container

- Iterazione sui numeri:

  - Utilizzo un ciclo per iterare da 1 a 100.
  - Per ogni numero controllo:

    - **Se** è un multiplo di 3 e di 5.
      - Assegno "FizzBuzz" a output.
    - **Se Invece**, è un multiplo di 3.
      - Assegno "Fizz" a output.
    - **Se Invece**, è un multiplo di 5.
      - Assegno "Buzz" a output.
    - **Altrimenti**, assegn il numero corrente a output.

- Creo un nuovo elemento `<li>`.
- Imposto il contenuto di `<li>` come output.
- Aggiungo l'elemento `<li>` come figlio dell'elemento `<ul>`.

- Fine del programma.
