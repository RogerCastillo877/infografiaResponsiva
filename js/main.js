var clickedBlock = 1;
var lastBlock = "bloque1";
$(document).ready(function(){
    $(".botonera li").click(function(){
        if(!$(this).hasClass("active")){
            $(".botonera li.active").removeClass("active");
            $(this).addClass("active");

            clickedBlock = $(this).data("block");
            
            $("ul.contents").removeClass(lastBlock)
                .addClass("bloque"+clickedBlock)
                .bind("transitionEnd webkitTransitionEnd oTransitionEnd MSTransitionEnd", arrancaTrasTransicion);
            lastBlock = "bloque"+clickedBlock;

            window["descargaBloque" + clickedBlock]();
        }        
    });
    initBloque1();
    cargaBloque1();
});

function arrancaTrasTransicion(){
    window["cargaBloque" + clickedBlock]();
    $("ul.contents").unbind("transitionEnd webkitTransitionEnd oTransitionEnd MSTransitionEnd", arrancaTrasTransicion);
}
function initBloque1(){
    $(".flecha_bottom").bind("transitionEnd webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
        $("#fase1_cohete").addClass("on");
    });
    $("#fase1_cohete").bind("transitionEnd webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
        descargaBloque1();
    });
}
function cargaBloque1(){
    $("#fase1_cohete").addClass("animated");
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
    $("#fase3_sonda").addClass("on");
}
function descargaBloque3(){
    $("#fase3_sonda").removeClass("on")
}