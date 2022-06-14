// Consegna
// L'utente indica un livello di difficoltà (con un prompt) in base al quale decidiamo il range di numeri possibili del gioco:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito attraverso dei prompt l'utente inserisce un numero alla volta finche il gioco non è finito:
// se il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomba, il gioco finisce con un messaggio di errore
// Altrimenti il gioco va avanti a meno di aver raggiunto il numero massimo di tentativi possibili. In questo caso il gioco finisce con un messaggio di vittoria.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha scelto un numero che non era una bomba.


// FASE DI PREPARAZIONE 
// chiedo all'utente il livello di difficolta del gioco 
// con difficoltà 1 => tra 1 e 100(range)
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// devo generare 16 numeri casuali su tutti i range di difficolta che saranno i numeri bomba e li inserisco in nu arrey
// mi ricavo il numero di tentativi di gioco sottraento il numero 16 al massimo del range della difficolta 

// FASE DI LOGICA
// chiedo un numero all'utente di continuo fino a quando:
// 1. il numero inserito dal giocatore non è uguale a quello nell'arrey delle bombe quidni alert('Sei ESPLOSO!!')
// 2. inserisco in un arrey il numero dato dall'utente (sempre se non è una bomba) e aggiungo la condizione di non ripetizione
// 2b. l'utente ha inserito tutti i numeri tanti quanti sono i numeri di tentativi (gameRange - 16) quidni alert('Complimenti non sei ESPLOSO!!')


    // chiediamo il livello all'utente 
    const userLevel = prompt('Scegli il livello di gioco tra: 1=facile 2=medio 3=difficile');
    // console.log(userLevel)

    // numero di bombe 
    const numBombs = 16

    let gameRange;
    if (userLevel === '1'){
        gameRange = 100
    }else if (userLevel === '2'){
        gameRange = 81
    } else if (userLevel === '3') {
        gameRange = 49
    } else{
        gameRange = 49
    }
    // console.log(gameRange)

    // numero tentativi 
    const gameAttempts = gameRange - numBombs
    // console.log(gameAttempts)






bombs = randomBombsGenerate (numBombs, 1, gameRange)


    /*--------------
        FUNZIONI
   ----------------- */ 

// mi creo un arrey dove andro ad inserire le 16 bombe generate casualmente senza duplicati 
// rangeMin = 1 da dove deve iniziare la generazione di numeri 
// rangeMax = gameRange ( range massimo di numeri generati in base al livello )

function randomBombsGenerate (numberBombs, rangeMin, rangeMax){
    // arrey dove inserisco le 16 bombe con so
   arreyBombs = []

   while( arreyBombs.lenght < numberBombs){
    // genero 16 numeri casuali 
    const  genBomb = Math.floor(Math.random() * rangeMax) + rangeMin;
    console.log(genBomb)

    if(!arreyBombs.includes(genBomb))
        arreyBombs.push(genBomb)
        
   }
   console.log(arreyBombs)
}

