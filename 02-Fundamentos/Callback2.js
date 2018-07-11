let empleados = [{
    id: 1,
    nombre:'Brandon'
},{
    id: 2,
    nombre:'Monica'
},{
    id: 3,
    nombre:'Ramses'
}]

let salarios = [{
    id: 1,
    salario: '100,000'
},{
    id: 2,
    salario: '5,000'
}]


//funcion para obtener empleado por id
let getEmpleadoById = (id, callback) => {
    
    /* el metodo de find() dunciona para recorrer arreglos en busqueda*/
    let empleadoDB = empleados.find(empleado => empleado.id === id)
        if(!empleadoDB){
            return callback(`No existe empleado con el ID ${id}`)
        }else{
            callback(null, empleadoDB)
        }

}


let getSalario = (empleado, callback) => {
    /* 
        la variable de salarios pertenece al valor de salarios en el global
        descomponemos el arreglo con find que es un callback y comparamos la 
        vuelta o la pocision con el id que le enviamos y dependiendo sea
        verdaddero o falseo se valida
    */
    let salarioDB = salarios.find((salario) => salario.id === empleado.id)
        if(!salarioDB){
            //returnamos para finalizar la funcion en caso de fallo
            return console.log(`Lo sentimos el empleado ${empleado.nombre} no cuenta con salario`)
        }else{
            //instanciamos con el callback el objeto en la pocision encontrada como true
            callback(null,{
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            })
        }
}

/*
    ejecutamos la funcion con los parametros del id, y los del callback
    disparamos el error y el success

*/
getEmpleadoById(1,(error, empleado) =>{
    if(error){
        return console.log(error)
    }

    getSalario(empleado, (error, resp) => {
        if(error){
            return console.log(error)
        }
        console.log(`el salario de ${resp.nombre}, es $${resp.salario} dlls`)
    })
})
