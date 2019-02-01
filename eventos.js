//-----------------------------------------------------------------------------------------------opcion1.
var burgerbtn = document.getElementById("burger-btn");
var menu = document.getElementById("menu");
const enlaces = document.querySelectorAll("#menu  li a");

/* SHOW/HIDDE MENU */
/* burgerbtn.addEventListener("click",function(){
menu.classList.toggle("is-active");
}); */

/* HIDE MENU AL CLIKEAR*/
/* menu.addEventListener('click', function() {
	menu.classList.remove('is-active');
}); */

//OTRA FORMA DE HACERLO
/*  burgerbtn.addEventListener('click', hideShow)
function hideShow(){
    if(menu.classList.contains('is-active')){
        menu.classList.remove('is-active');
    }else{
        menu.classList.add('is-active') ;
    }
}  */

//------------------------------------------------------------------------------------------------opcion2.
//TRABAJANDO MEDIA QUERIES DESDE JAVASCRIPT   //Diferencia declarando variables con VAR, LET Y CONST
/* console.log(window.matchMedia('screen and (max-width:767px)')); */

const ipad = window.matchMedia('screen and (max-width:767px)'); //preguntando si cumple con los tamaños media queries(true or false)
                                                                //Solo detecta si recarga la pagina no funciona con resize
ipad.addListener(validation) //ejecutando funcion validation()

function validation(event){
    if(event.matches){
        burgerbtn.addEventListener("click", hideShow);
        menu.addEventListener('click', hideClick); 
    }else{
        burgerbtn.removeEventListener("click", hideShow);
        menu.addEventListener('click', hideClick); 
    }
}

validation(ipad); //con esto se soluciona el problema del boton de menu que no funcionaba al cargar en pantallas responsive (evento resize)

function hideShow(){
    if(menu.classList.contains('is-active')){
        menu.classList.remove('is-active');
    }else{
        menu.classList.add('is-active') ;
    }
} 

function hideClick() {
	menu.classList.remove('is-active');
}