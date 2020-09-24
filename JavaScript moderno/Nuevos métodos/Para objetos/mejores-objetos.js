const nombre = 'Diana';
const color = 'verde';
const ciudad = 'Utebo';
const lenguaje = 'JavaScript';

/* Forma tradicional
 const persona = {
     nombre: nombre, 
     color: color,
     ciudad: ciudad,
     lenguaje: lenguaje,
     saludar: function(){
         console.log(`Hola me llamo ${this.nombre}`);
     }
 } */

//Forma mejorada 
const persona = {
    nombre, 
    color,
    ciudad,
    lenguaje,
    [ciudad + "CP"]: 50180, //Hemos compuesto una propiedad de forma dinámica en base a algunos valores que figuran en el script
    saludar() {
        console.log(`Hola me llamo ${this.nombre}`);
    }
};

//console.log(persona);
console.log(Object.values(persona)); //Extraemos valores de una forma muy sencilla
const[nombre2, color2, ciudad2, lenguaje2]= Object.values(persona);

//Object.entries es parecido pero ademas de los valores también retorna las propiedades
console.log(Object.entries(persona));
Object.entries(persona).forEach(([key, value]) => {
    console.log(`${key} : ${value}`);
});