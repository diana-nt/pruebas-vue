//Los operadores async/await hacen mas sencilla la implementación de muchas
//promesas asincronas. Tambien permiten a los desarrolladores escribir un código
//mucho más claro, breve, conciso, y preciso.


    //Tenemos un array de datos
const datos =[{
    id: 1, 
    title: 'Iron Man',
    year: 2008
},{
    id: 2,
    title: 'Spiderman Homecoming',
    year: 2017
},{
    id: 3,
    title: 'Avengers: Endgame',
    year: 2019
}];



    //Tenemos una funcion que devuelve estos datos.
//  const getDatos = () => {
//      return datos;
//  }

    //Cuando llamamos a la funcion con console.log obtenemos los datos directamente 
    //porque esto es algo sincrono.
//console.log(getDatos);

    //Imaginemos que estos datos no los tenemos aqui, sino que es una API la
    //que nos devuelve ese array, u otro servicio. Cualquier llamada que se haga a traves
    //de la red tiene un pequeño delay.
    //Vamos a simular la asincronia usando un timeOut.
// const getDatos = () => {
//     setTimeout(() => {
//         return datos;
//     }, 1500);
// }

//console.log(getDatos);
    //Esto no devuelve nada porque aun no ha pasado eltiempo establecido anteriormente.



    //Este problema se resuelve con las promesas. Son un objeto especial que nos permite 
    //ejecutar un trozo de codigo y cuando este listo se devuele. En caso de error devuelve error.
    //Pero siempre devuelve algo.
const getDatos = () => {
    return new Promise((resolve, reject) => {
        if(datos.length === 0){
            reject(new Error('No existen datos'));
        }
        setTimeout(() => {
            resolve (datos);
        }, 1500);
    });
}

// getDatos()
//     .then((datos) => console.log(datos));
    //Las promesas se pueden encadenar y si hubiera algun error lo recogeriamos con el catch.

    //Ahora en lugar de las promesas, se usa el async-await. En vez de un then emplearemos un 
    //await, y para que await funcione envolveremos toda la funcion con un async.
async function fetchingData(){
    try {
        const datosFetched = await getDatos();
        console.log(datos);
    }catch(err){
        console.log(err.message);
    }
}

fetchingData();
