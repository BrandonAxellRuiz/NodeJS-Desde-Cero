let nombre = "Brandon Axell Ruiz"

if (true) {

    /* 
        una de las principales funciones de "let" es el "alcance o scope" 
        de la variable en este caso se puede volver a definir a pesar de ya haber sido definida anteriormente
        y es porque apuntan a lugares diferentes de la memoria 
        en pocas palabra solo vive en el if dentro de las llaves 
    */

    let nombre = "Monica"
    console.log(nombre); //imprime Monica
}

console.log(nombre); //imprime Brandon Axell Ruiz porque su scoope viene de arriba no del if

let i = 15;

for (let i = 0; i < 10; i++) {
    console.log(`Iteracion del ciclo ${i}`) //imprime valor de i en la vuelta actual de ciclo 0 al 9
}

console.log(`Valor de i = ${i}`) //imprime Valor de i = 15