function sumar(a, b){
    return a + b 
} 
console.log(sumar(10,20))

let sumarFlecha = (a, b) => {
    return a + b 
}
console.log(sumarFlecha(50,20))

let sumarFlechaCorta = (a, b) => a + b
console.log(sumarFlechaCorta(30, 20))

let saludar = () => `hola mundo`
console.log(saludar())


let saludoPersona = nombre => `Hola mucho gusto ${nombre}` 
console.log(saludoPersona(`Brandon`))


/*
    cuando usas objetos en los cuales incluimos una funcion y deseamos returnr el valor con el methodo this no apuntan las 
    aarrow functions
*/
let person = {
    nombre: 'brandon',
    apellido: 'ruiz',
    poder: 'programar',
    getName(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    } 
}

console.log(person.getName())