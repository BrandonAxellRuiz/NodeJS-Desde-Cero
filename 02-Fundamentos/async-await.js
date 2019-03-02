/**
 * Async Await
*/

/*
let getNombre = async () =>  await 'Brandon Axell Ruiz';
*/

let getNombre = () =>  {
   return new Promise ((resolve, rejected) => {
      setTimeout(() => {
         return resolve('Brandon Axell Ruiz');
      },3000)
   })
};

let saludo = async () => {
   let nombre = await  getNombre();
   console.log(`Hola ${nombre}`)
}

saludo()
