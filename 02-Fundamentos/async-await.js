/**
 * Async Await
*/

/*
let getNombre = async () =>  await 'Brandon Axell Ruiz';
*/

let getNombre = async () =>  {
   return await 'Brandon Axell Ruiz'
};

getNombre()
    .then(response => console.log(response))
    .catch(error => console.error(error))

