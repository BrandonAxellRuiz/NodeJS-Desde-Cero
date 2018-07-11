setTimeout(() => {
    console.log(`hola mundo`)
}, 3000)

let getUsuarioBiId = (id, callback) => {
    
    let usuario ={
        nombre: "Brandon",
        //redundante "id:id"
        id
    }

    if(id === 20){
        callback(`El usuario con id ${id} no existe en la base de datos`)
    }else{
        callback(usuario)
    }

}

getUsuarioBiId(10, (error, usuario) => {
    if(error){
        return console.log(error)
    }else{
        console.log(null, 'Usuario de base de datos' , usuario)
        console.log(null,'Usuario de base de datos' , usuario.nombre)
    }
})
    