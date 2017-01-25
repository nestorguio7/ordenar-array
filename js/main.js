
$(document).ready(function(){
    $('#button').click(function(){
        var list = $("#array").val().split(","); // Capturas el array del input
        arreglo = list;

        var sinduplicados = []; // verificamos si se duplican los numeros
        $.each(arreglo, function(i, el){
            if($.inArray(el, sinduplicados ) === -1){
                if(el>0 && el<9){ // validamos los numeros dentro de una escla del 1 al 9
                    sinduplicados.push(el);
                }
            }
        });
        imprimirArreglo(sinduplicados);
        arreglo = sinduplicados;
        return false;
    });

});
var arreglo;
var i=0,j=0;
var iteracion; //sirve para guardar el evento de tiempo y poder pararlo

function ordenar(){

    //comienza la iteracion con velocidad de 3 decimas de segundo cada iteración
    iteracion=setInterval(burbuja,300);

    //desabilitamos boton
    $("#button").prop("disabled",true)

}

//funcion que plasma el arreglo para poder ser visualizado
function imprimirArreglo(array){

    //borramos el contenido del div del contenido
    $("#wrapper").html("");

    //imprimimos los elementos en forma de div
    for(i_=0;i_<arreglo.length;i_++){

        //anexamos un div con clase bloque
        $("#wrapper").append("<div class='bloque'>"+arreglo[i_]+"</div>");
    }

}

function burbuja(){
    //recorreremos todos los elementos hasta n-1
    if(i<arreglo.length){

        //recorreremos todos los elementos hasta n-i, tomar en cuenta los ultimos no tiene caso ya que ya estan acomodados.
        if(j<(arreglo.length-i)){

            //comparamos
            if(arreglo[j]>arreglo[j+1]){
                //guardamos el numero mayor en el auxiliar
                aux=arreglo[j];
                //guardamos el numero menor en el lugar correspondiente
                arreglo[j]=arreglo[j+1];
                //asignamos el auxiliar en el lugar correspondiente
                arreglo[j+1]=aux;
            }
            j++;
        }else{
            j=0;
            i++;
        }
    }else{
        //aqui se termina el algoritmo por lo cual paramos el setInterval
        clearInterval(iteracion);
    }
    //imprimimos el arreglo en cada iteración
    imprimirArreglo()

}

