let person = {
    nombre: 'brandon',
    apellido: 'ruiz',
    poder: 'programar',
    getName: function(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    } 
}

console.log(person.getName())

let {
    nombre: nombrePersona,
    apellido: apellidoPersona,
    poder: poderPerson,
    getName: TodaInfo
} = person

console.log(nombrePersona, apellidoPersona, poderPerson, TodaInfo)