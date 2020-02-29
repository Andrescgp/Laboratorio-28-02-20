function caso_1(a,b) {
/* 1) Escribir una función que calcule el área de un triángulo
    recibiendo como entrada el valor de base y altura */
    var a = prompt('Ingresa el valor de la altura:');
    var b = prompt('Ingresa el valor de la base:');
    var area = (a * b) / 2;
    console.log(area);
};
areatriangulo();


function caso_2(){
/* 2) Escribir una función que retorne el valor mayor entre 3 números */
    var a = prompt('Ingresa el primer valor:');
    var b = prompt('Ingresa el segundo valor:');
    var c = prompt('Ingresa el tercer valor:');
    valor = [a,b,c];
      var mayor = valor[0];
    for(i=0;i<valor.length;i++){
        if(valor[i] > mayor)
            mayor=valor[i];
    }
  return mayor;
  }
  respuesta = mayor();
  alert(respuesta);


function caso_3() {
/* 3) Escribir una función que reciba el nombre y la edad y
retorne true si puede votar,en caso contrario false */
    var nombre = prompt('¿Cuál es tu nombre?');
    var edad = parseInt(prompt('¿Cuál es tu edad?',''));
    if (edad > 17) {
        mensaje = 'Puedes votar ';
     alert('Hola ' + nombre + ', eres participante.');
    }
    else { 
        alert('Todavía no eres participante.');
    }
 }
 caso_3();


 function caso_4(day) {
/* 4) Escribir una función que determine si un día de la semana es laboral o no (L-V) */
    if (day == 'Sabado' || day == 'Domingo'){
        return false
    }else if(day == 'Lunes' || day == 'Martes' || day == 'Miercoles' || day == 'Jueves' || day == 'Viernes'){
        return true
    }else{
        return 'Entrada no valida'
    }
}


function caso_5() {
/* 5) Escribir una función que reciba las notas de un estudiante y retorne el promedio */
    var n1 = parseInt(prompt('Nota Quiz 1',''));
    var n2 = parseInt(prompt('Nota Quiz 2',''));
    var n3 = parseInt(prompt('Nota Quiz 3',''));
    var calcular = (parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3;
    alert("Su promedio es: "+calcular)
};
promedio ();


var num = Array(5);
var suma = 0;
function caso_6() {
/* 6) Escribir una función que reciba un arreglo de números y retorne la suma de todos ellos */ 
for (i = 0; i < num.length; i++){
    num[i] = parseInt(prompt("Ingrese un valor:"));
    suma += num[i];
    }
    return suma;
};
sumar(suma);


function caso_7 (dog_name_list){
/* 7) Escribir una función que reciba una lista de nombres de perros y
    retorne cuales empiezan por "p" */

    var dog_name = '';
    var dog_name_p = [];
    for (let index = 0; index < dog_name_list.length; index++) {
        dog_name = dog_name_list[index];
        first_char = dog_name.charAt(0)
        if (first_char == 'p' || first_char == 'P'){
            dog_name_p.push(dog_name)
        }
    }
    return dog_name_p
}

function caso_8(carros) {
/*
8) Escribir una función que reciba un un arreglo el siguiente arreglo con objetos y retorne 
cuantos son modelos superiores a 2018

    var carros = [
        { marca: 'Mazda', modelo: 2029 },
        { marca: 'Chevrolet', modelo: 2017 },
        { marca: 'Jeep', modelo: 2018 },
        { marca: 'Ferrari', modelo: 2015 },
        { marca: 'Nissan', modelo: 2021 },
    ]
*/
    var model = 0;
    var good_model = [];
    for (let index = 0; index < carros.length; index++) {
        model = carros[index].modelo;
        if (model > 2018) {
            good_model.push(carros[index]);
        }
    }
    return good_model
}
