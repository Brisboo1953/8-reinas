
var contador =0;
var none = "red";

let reina = "./img/reinita.png";  
document.addEventListener("DOMContentLoaded", function () {
   
    const selectImagen = document.getElementById("reinaImagen");

    
    selectImagen.addEventListener("change", function () {
        limpiarTablero();
        
        contador = 0;
        const opcionSeleccionada = selectImagen.value;  

        
        if (opcionSeleccionada === "reina1") {
            contador = 0;
            reina = "./img/reinita.png"; 
        } else if (opcionSeleccionada === "reina2") {
            contador = 0;
            reina = "./img/reina2.png"; 
        } else if (opcionSeleccionada === "reina3") {
            contador = 0;
            reina = "./img/reina3.png"; 
        }

    });
});


document.addEventListener("DOMContentLoaded", function () {
   
    const selectSolucion = document.getElementById("solucion");

    
    selectSolucion.addEventListener("change", function () {
        const opcionSeleccionada = selectSolucion.value;  

        if (opcionSeleccionada === "solucion1") {
            solucion1();
        } else if (opcionSeleccionada === "solucion2") {
            solucion2(); 
        } else if (opcionSeleccionada === "solucion3") {
            solucion3(); 
        }else if (opcionSeleccionada === "ninguna") {
            limpiarImagen()
            contador = 0;
        }

    });
});

document.addEventListener("DOMContentLoaded", function () {
    const color3 = document.getElementById("color3");  

    color3.addEventListener("input", function () {
        none = color3.value; 
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const color1 = document.getElementById("color1");
    const color2 = document.getElementById("color2");

    function cambiarColores() {
        let c1 = color1.value;
        let c2 = color2.value;

        // Cambiar las variables CSS 
        document.documentElement.style.setProperty("--color1", c1);
        document.documentElement.style.setProperty("--color2", c2);
    }

    // Detectar cambios en los inputs y actualizar
    color1.addEventListener("input", cambiarColores);
    color2.addEventListener("input", cambiarColores);
});


function mostrarReina(celda){


    if (window.getComputedStyle(celda).backgroundImage=="none"){
        if(contador<8){

            celda.style= `
            background-image:url(${reina});
            background-size:50px;
            background-repeat:no-repeat;
            background-position:center;`;
            contador++;
        }
        else{
            alert("No se puede colocar más reinas, ya que se alcanzó el límite.");
        }
            
    } else {
    
        celda.style= `background-image:none;`;
        contador --;
    }

}

function bloquearCeldas(r,c){

    var celda = document.getElementById("tablero");
    var r1 = r, c1 = c, r2 = r, c2 = c;
    var r3=r, c3 = c, r4 = r, c4 = c;


    for (let i = 0; i < 8; i++) {
        celda.rows[r].cells[i].style.pointerEvents='none';
        celda.rows[i].cells[c].style.pointerEvents='none';

        if(r1<8 && c1<8){
            celda.rows[r1++].cells[c1++].style.pointerEvents='none';
            
        }


        if(r2>-1 && c2<8){
            celda.rows[r2--].cells[c2++].style.pointerEvents='none';
            
        }
        
        if(r3>-1 && c3>-1){
            celda.rows[r3--].cells[c3--].style.pointerEvents='none';
            
        }

        if(r4<8 && c4>-1){
            celda.rows[r4++].cells[c4--].style.pointerEvents='none';
            
        }        

    
  
    }

}

function cambiarColor(r,c){

    var celda = document.getElementById("tablero");
    var r1 = r, c1 = c, r2 = r, c2 = c;
    var r3=r, c3 = c, r4 = r, c4 = c;


    for (let i = 0; i < 8; i++) {
        celda.rows[r].cells[i].style.backgroundColor=none;
        celda.rows[i].cells[c].style.backgroundColor=none;

        if(r1<8 && c1<8){
            celda.rows[r1++].cells[c1++].style.backgroundColor=none;
            
        }


        if(r2>-1 && c2<8){
            celda.rows[r2--].cells[c2++].style.backgroundColor=none;
            
        }
        
        if(r3>-1 && c3>-1){
            celda.rows[r3--].cells[c3--].style.backgroundColor=none;
            
        }

        if(r4<8 && c4>-1){
            celda.rows[r4++].cells[c4--].style.backgroundColor=none;
            
        }        

    
  
    }

}

function limpiar(){
    var celdas = document.getElementsByTagName("td");

    for (let i = 0; i < celdas.length; i++) {
        celdas[i].style.backgroundColor="";
    }
}

function limpiarImagen(){

    var celdas = document.getElementsByTagName("td");

    for (let i = 0; i < celdas.length; i++) {
        celdas[i].style.backgroundImage="none";
    }

}

function solucion1(){

    limpiarImagen();
    
    var celdas = document.getElementById("tablero");
    var estilo = `
            background-image:url(${reina});
            background-size:50px;
            background-repeat:no-repeat;
            background-position:center;`;
    
    
    celdas.rows[0].cells[3].style = estilo;
    celdas.rows[2].cells[2].style = estilo;
    celdas.rows[1].cells[6].style = estilo;
    celdas.rows[3].cells[7].style = estilo;
    celdas.rows[4].cells[1].style = estilo;
    celdas.rows[5].cells[4].style = estilo;
    celdas.rows[6].cells[0].style = estilo;
    celdas.rows[7].cells[5].style = estilo;

    contador = 8;
}


function solucion2(){


    limpiarImagen();
    
    var celdas = document.getElementById("tablero");
    var estilo = `
            background-image:url(${reina});
            background-size:50px;
            background-repeat:no-repeat;
            background-position:center;`;
    
    
    celdas.rows[0].cells[4].style = estilo;
    celdas.rows[1].cells[1].style = estilo;
    celdas.rows[2].cells[3].style = estilo;
    celdas.rows[3].cells[6].style = estilo;
    celdas.rows[4].cells[2].style = estilo;
    celdas.rows[5].cells[6].style = estilo;
    celdas.rows[6].cells[5].style = estilo;
    celdas.rows[7].cells[0].style = estilo;

    contador = 8;
}


function solucion3(){


    limpiarImagen();
    
    var celdas = document.getElementById("tablero");
    var estilo = `
            background-image:url(${reina});
            background-size:50px;
            background-repeat:no-repeat;
            background-position:center;`;
    
    
    celdas.rows[0].cells[2].style = estilo;
    celdas.rows[1].cells[5].style = estilo;
    celdas.rows[2].cells[7].style = estilo;
    celdas.rows[3].cells[0].style = estilo;
    celdas.rows[4].cells[3].style = estilo;
    celdas.rows[5].cells[6].style = estilo;
    celdas.rows[6].cells[4].style = estilo;
    celdas.rows[7].cells[1].style = estilo;

    contador = 8;
}

function limpiarTablero() {
    limpiarImagen(); // Quita todas las imágenes de las reinas
    limpiar(); // Limpia los colores de las celdas
    contador = 0; // Reinicia el contador de reinas
    
    // Reactiva todas las celdas deshabilitadas
    var celdas = document.getElementsByTagName("td");
    for (let i = 0; i < celdas.length; i++) {
        celdas[i].style.pointerEvents = "auto";
    }
}









