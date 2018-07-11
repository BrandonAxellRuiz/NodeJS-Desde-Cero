let nombre = "Brandon Axell"
let blog = "BackHome"

console.log(`${nombre} ${blog}`)

let nombreCompleto = nombre+' '+blog
let nombreCompletoTemplate = `${nombre} ${blog}`

console.log(nombreCompleto === nombreCompletoTemplate)

function Nombres(){
    return `${nombre} ${blog}`
}

console.log(`El nombre de el blog de ${nombre} es ${blog}`)