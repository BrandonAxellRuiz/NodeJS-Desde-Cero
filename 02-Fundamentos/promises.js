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
let getEmpleadoById = (id) => {
    return new Promise((resolve, reject) => {
        /* el metodo de find() dunciona para recorrer arreglos en busqueda*/
        let empleadoDB = empleados.find(empleado => empleado.id === id)
        if(!empleadoDB){
            return reject(`No existe empleado con el ID ${id}`);
        }else{
            //en caso de regresar mas de dos argumentos se envia en objeto js
            resolve(empleadoDB);
        }
    });
}
/*
getEmpleadoById(20).then(empleado => {
    console.log('Empleado de BD', empleado)
}, (error) => {
    console.log(error)
})*/


let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find((salario) => salario.id === empleado.id)
       
        if(!salarioDB){
            //returnamos para finalizar la funcion en caso de fallo
            return reject(`Lo sentimos el empleado ${empleado.nombre} no cuenta con salario`)
        }else{
            //instanciamos con el callback el objeto en la pocision encontrada como true
            return resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            })
        }
    })
    /* 
        la variable de salarios pertenece al valor de salarios en el global
        descomponemos el arreglo con find que es un callback y comparamos la 
        vuelta o la pocision con el id que le enviamos y dependiendo sea
        verdaddero o falseo se valida
    */
    
}

/*

//console.log(getSalario(1))
getSalario(empleados[3]).then(response => {
    console.log(response)
}, error => {
    console.error(error)
})
*/

/*
getEmpleadoById(2).then(empleado => {    
    return getSalario(empleado).then(response => console.log(response), error => console.error(error));
}, (error) => console.log(error))
*/


getEmpleadoById(1)
    .then(empleado =>  getSalario(empleado))
    .then(response => console.log(response))
    .catch(error => console.error(error));