var clickedBlock = 1;
var lastBlock = "bloque1";
$(document).ready(function(){
    $(".botonera li").click(function(){
        if(!$(this).hasClass("active")){
            $(".botonera li.active").removeClass("active");
            $(this).addClass("active");

            clickedBlock = $(this).data("block");
            
            $("ul.contents").removeClass(lastBlock);

            $("ul.contents").addClass("bloque"+clickedBlock);
            lastBlock = "bloque"+clickedBlock;

            window["cargaBloque" + clickedBlock]();
        }        
    });
    cargaBloque1();
});

function cargaBloque1(){
    $("#fase1_cohete").addClass("animated");
    $("#fase1_cohete").addClass("on");
    $(".flecha_bottom").addClass("animated");
    $(".flecha_bottom").addClass("on");
}
function descargaBloque1(){
    $("#fase1_cohete").removeClass("animated");
    $("#fase1_cohete").removeClass("on");
    $(".flecha_bottom").removeClass("animated");
    $(".flecha_bottom").removeClass("on");
}
function cargaBloque2(){

}
function descargaBloque2(){
    
}
function cargaBloque3(){

}
function descargaBloque3(){
    
}