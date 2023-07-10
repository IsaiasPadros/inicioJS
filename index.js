
// const month = prompt('Ingrese un número de mes');

// if (month === '1') {
//    alert('Enero');
//  } else if (month === '2') {
//  } else if (month === '3') {
//    alert('Marzo');
//  } else {
//    alert('No es ni Enero, ni Febrero ni Marzo');
//  }

// const califacicion = prompt('Ingrese la calificacion obtenida')

// if (califacicion === '0' || califacicion=== '1' || califacicion=== '2')
// {
//   alert('Muy deficiente');
// }else if (califacicion === '3' || califacicion=== '4')
// {
//   alert('Insuficiente');
// }else if(califacicion === '5' || califacicion=== '6')
// {
//   alert('Suficiente');
// }else if(califacicion === '7')
// {
//   alert('Bien');
// }else if(califacicion === '8' || califacicion=== '9')
// {
//   alert('Notable');
// }else if(califacicion === '10')
// {
//   alert('Sobresaliente');
// }
// else{
//   alert('Numero erroneo')
// }



const sumar = function(x,y)
{



return x+y

}



const esPar = function(x)
{
    if(x%2 === 0)
    {
        alert('El numero es par')
    }
    else{
        alert('El numero es impar')
    }

}


const contador = function(x,y) // X es el numero de donde arranco a contar e Y hasta donde cuento
{
    for (let p=0; x < y; x++) 
    {
        console.log(x)
        
    }

}

const esPar2 = function(y,x) //intervalo (Y,X), donde se quiere analizar cuantos numeros pares hay
{
    let i = 0;
    for (; y < x; y++) {
        const multiplo = y%2 === 0 ? 'SI' : 'NO' ;
        console.log( y + ' ' + multiplo +' es par')
        if(y%2 === 0)
        {
            i++;
        }
        
    }

    console.log(`Hay ${i} numeros pares en el intervalo`)
}



const palabras = [
    'Hola',
    'Como',
    'Estas'
]


const palabra= 'isaias' ;
console.log(`La palabra tiene ${palabra.length} letras`)

let largoArray = palabras.length ;
console.log(`El array palabras tiene ${largoArray} elementos`)




// 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// let n1 = parseInt(prompt("Escribe un número"));
// let n2 = parseInt(prompt("Escribe otro número"));
// document.write("La suma es: " + (n1+n2));




//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
    // let n1 = parseInt(prompt("Escribe un número"));
    // let n2 = parseInt(prompt("Escribe otro número"));
    // let n3 = parseInt(prompt("Escribe otro número"));

    // if(n1>n2 && n1>n3)
    // {
    //     document.write("El numero mayor es " + n1);
    // }    
    // if(n2>n1 && n2>n3)
    // {
    //     document.write("El numero mayor es " + n2);
    // }
    // if(n3>n2 && n3>n1)
    // {
    //     document.write("El numero mayor es " + n3);
    // }        

//8.- Escribe un programa que pida un número y diga si es divisible por 2

// let n1 = parseInt(prompt("Escribe un número"));
// if(n1%2 === 0){

//     document.write("El numero  " + n1  ," es par ");
// } 
// else {

//     document.write("El numero  " + n1  ," es impar ");
// }
    

//7-Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// function imprimirPiramideInversa(numero) {
//     if (numero > 50) {
//       console.log("El número ingresado no puede ser mayor a 50.");
//       return;
//     }
  
//     for (let i = numero; i >= 1; i--) {
//       const espacios = " ".repeat(numero - i);
//       const numeros = Array.from({ length: i }, (_, index) => index + 1).join(" ");
//       console.log(espacios + numeros);
//     }
//   }
  
//   const numeroUsuario = parseInt(prompt("Ingresa un número (no mayor a 50):"));
//   imprimirPiramideInversa(numeroUsuario);


//11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *


function nombreMayor(n1,n2,n3,nombre1,nombre2,nombre3){

     if(n1>n2 && n1>n3)
     {
         document.write("El mayor es " + nombre1," con " +n1, " anios"  );
     }    
    if(n2>n1 && n2>n3)
     {
         document.write("El mayor es " + nombre2," con " +n2, " anios");
     }
     if(n3>n2 && n3>n1)
     {
        document.write("El mayor es " + nombre3," con " +n3, " anios");
     }  



}

const nombre1 = prompt("Ingresa el nombre de la persona:");
     const n1 = parseInt(prompt("Ingresa su edad"));

     const nombre2 = prompt("Ingresa el nombre de la persona:");
     const n2 = parseInt(prompt("Ingresa su edad"));

     const nombre3 = prompt("Ingresa el nombre de la persona:");
     const n3 = parseInt(prompt("Ingresa su edad"));

     
     nombreMayor(n1,n2,n3,nombre1,nombre2,nombre3);     