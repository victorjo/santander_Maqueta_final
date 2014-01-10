var msjAlert = ["Desde aquí puede consultar el estado de todas sus Transferencias de Saldo", "Balance Transfer le permite transferir a sus tarjetas Santander la deuda de sus otras tarjetas de otros bancos.", "Por favor compuebe que la información es correcta antes de confirmar.", "La operación se ha realizado correctamente."];
$(document).ready(function() {

    $("#widreducido").css("position", "fixed");

    dropIsra();
    avatarFade();
    $(".widget-min").hover(function() {
        $(this).css({
            "box-shadow": "0 0 3px #757575"
        });

    }, function() {
        $(this).css({
            "box-shadow": "none",
            "border": "none"
        });
    });

});


var cards = [

    {
        label: '123456789012 SUPER CUENTA UNIVERSITARIA Principal 1,345.67 MXP',
        value: '1234****5678  Producto Santander'
    }, {
        label: '123456789012 SUPER NOMINA Nómina  11,000.00 MXP',
        value: '1234****5678  Producto Santander'
    }, {
        label: '123456789012 SUPER CUENTA Cuenta2 1,000.00 MXP',
        value: '1234****5678  Producto Santander'
    }, {
        label: '123456789012 CUENTA FREE Mama ¡130.60 MXP',
        value: '1234****5678  Producto Santander'
    },

];


/*Funcion switch (Normal de label dos digitos)- instanciado mediante clases*/
function switchFunc(object, descripcion1, descripcion2, tipoModulo) {

    var switchO = '<div style="position:relative;width:230px;">';
    switchO += '<div class="on' + tipoModulo + '">' + descripcion1 + '</div>';
    switchO += '<div class="tope' + tipoModulo + '"></div>';
    switchO += '<div class="off' + tipoModulo + '">' + descripcion2 + '</div>';
    switchO += '</div>';

    var container = $("#" + object);

    container.html(switchO);

    container.children("div:first").find(".on" + tipoModulo).click(function() {
        container.children("div").animate({
            left: "-=45"
        }, "fast");
    });

    container.children("div:first").find(".off" + tipoModulo).click(function() {
        container.children("div").animate({
            left: "+=45"
        }, "fast");
    });
}

/*Funhcion switch (label de mas de dos digitos)--- Flujo: Domiciliaciones Ã³ mas */
function switchFuncDomMas(object, descripcion1, descripcion2, tipoModulo) {

    var switchO = '<div style="position:relative;width:230px;">';
    switchO += '<div class="on' + tipoModulo + '">' + descripcion1 + '</div>';
    switchO += '<div class="tope' + tipoModulo + '"></div>';
    switchO += '<div class="off' + tipoModulo + '">' + descripcion2 + '</div>';
    switchO += '</div>';

    var container = $("#" + object);

    container.html(switchO);

    container.children("div:first").find(".on" + tipoModulo).click(function() {
        container.children("div").animate({
            left: "-=80"
        }, "fast");
    });

    container.children("div:first").find(".off" + tipoModulo).click(function() {
        container.children("div").animate({
            left: "+=80"
        }, "fast");
    });
}

/***********************************************************************************
**** Html structure for dropIsra     ****    Necesary classes { dropdown,downI,upI }    ****************************************
<div class="dropdown">
  <img class="downI" src="../img/iconos/dropdown.png" style="display: block;">
  <img class="upI" src="../img/iconos/dropup.png" style="display: none;">
  <h6>Quiero notificaciÃ³n previa de mi pago</h6>
</div>
******* *   * * * * * **    

*/
//Funtion to generate functionality

function dropIsra(selector) {
    $(".downI").click(function() {
        $(this).hide();
        $(this).next().show();
        $(this).parent().next(".wra_Select4").show("slow");
    });
    $(".upI").click(function() {
        $(this).hide();
        $(this).prev().show();
        $(this).parent().next(".wra_Select4").hide("slow");
    });
}

////************ Component for blackhorsebox
/*
  <div class="sexycombo">
        <input type="text" id="autocompleteQ" placeholder="00" style="width:517px; height:25px; border:1px solid #989898; border-right: 0px; outline:0px;margin-top:0px; margin-left:0px;margin-bottom:15px;"> 
        <span style="font-weight:bold;margin-left:0px;position: relative;top: 3px;left: -27px;"><img class="activo" src="img/iconos/favorito_of.png"><img class="inactivo" src="img/iconos/favorito_on.png"></span>
        <div class="marcotriangulo" style="margin-top: -44px; margin-left: 518px;"><div class="triangulo_inf"></div></div>
      </div>
  */
function omniBox(selector, objectCards) {
    var auto = $("#" + selector);
    auto.autocomplete({
        source: objectCards || cards,
        minLength: 0,
        open: function() {
            $(".ui-autocomplete").css({
                "max-height": "201px",
                "overflow-y": "scroll",
                "font-size": "13px",
                "width": "480px"
            })
        }
    });
    $("#" + selector).parent().on("click", function() {
        auto.autocomplete("search", "");
    });

    $(".activo").click(function() {
        $(this).hide("fast");
        $(this).next(".inactivo").show("fast");
    });

    $(".inactivo").click(function() {
        $(this).prev(".activo").show("fast");
        $(this).hide("fast");
    });
}

/*Mostrara el step 1, mientras que ocultara los demÃ¡s steps apartir del 2*/
function ocultaSteps(num_Step) {
    for (var i = 2; i <= num_Step; i++) {
        $('#step' + i).hide();
    }
}

function creaToken(contenedor, cbTokenCanc, cbTokenAcep, moreData, fn) {
    if (typeof fn != "undefined" || fn != null || fn != undefined) fn();
    tokenHTML = '<div id="widreducido"><div id="headerWidget"><p>TOKEN</p><div id="btninfo"></div></div><div id="subtitulo">';
    tokenHTML += '<p>Para realizar su operación es necesario<br/>ingresar el código del TOKEN:</p></div><div id="token">';
    tokenHTML += '<img src="img/token.png"/></div><div id="input"><input class="input" type="text" placeholder="Ingresar TOKEN" /></div>';
    tokenHTML += '<div class="botoneraToken">';
    tokenHTML += '<div class="btn" onclick="' + cbTokenCanc + '">Cancelar</div><div class="btn btnaceptar" onclick="' + cbTokenAcep + '" ' + moreData + '>Aceptar</div>';
    tokenHTML += '</div></div>';

    $("#" + contenedor).html(tokenHTML);

}

/*Funcion que muestra el bloqueo del correo y numero celular*/
function creaTelCel(contenedor, cbTokenCanc, cbTokenAcep, moreData) {

    telcelHTML = '<div id="datosTelCorreo">';
    telcelHTML += '<p><b>A continuación puede actualizar su correo electrónico y número celular para recibir notificaciones.</b></p>';
    telcelHTML += '<p><b>Correo registrado para notificación: veronica.pimentel@gmail.com</b></p>';
    telcelHTML += '<p><b>Celular registrado para notificación: 5555555555</b></p>';
    telcelHTML += '<div>';
    telcelHTML += '<img  src="../img/interfaz/paginador_encendido.png" width="12" height="12"><span><b>Correo que quedará registrado para notificación:</b></span><br>';
    telcelHTML += '<input type="text" class="input1"  placeholder="Correo@correo.com">';
    telcelHTML += '</div>';
    telcelHTML += '<div>';
    telcelHTML += '<img  src="../img/interfaz/paginador_apagado.png" width="12" height="12">';
    telcelHTML += '<span><b>Celular que quedará registrado para notificación:</b></span><br>';
    telcelHTML += '<input type="text" class="input1"  placeholder="5555555555">';
    telcelHTML += '</div>';
    telcelHTML += '<span><b>*Este medio cambiará para todas las operaciones de supernet. ¿esta seguro que desea realizar la acción?</b></span>';
    telcelHTML += '<table class="btnTabla"><tr><td><div class="btn" onclick="' + cbTokenAcep + '" ' + moreData + '>Guardar cambios</div></td>';
    telcelHTML += '</tr><tr><td><div class="btn" onclick="' + cbTokenCanc + '">Cancelar</div></td>';
    telcelHTML += '</tr></table>';
    telcelHTML += '</div>';

    $("#" + contenedor).html(telcelHTML);

}

function avatarFade() {
    $("#avatarNavPrin").hover(function() {
        if ($("#fadeAvatar").is(":animated")) {
            return false
        } else {
            $("#fadeAvatar").fadeToggle("slow");
        }


    });
}


/*********  FIN Transiciones de flujo(1): DomiciliaciÃ³n de servicios **********/

/*Mostrara el step 1, mientras que ocultara los demÃ¡s steps apartir del 2*/
function ocultaSteps(num_Step) {
    for (var i = 2; i <= num_Step; i++) {
        $('#step' + i).hide();
    }
}


/*Funciones de bloqueo (Overlay)*/

function creaOverlay(color, contenedor, tipo, call) {

    pos = (tipo == 1) ? 'absolute' : 'fixed';
    zposition = (tipo == 1) ? '1000' : '';
    var divOverlay = $("<div>");
    var c = $(contenedor);
    c.css("position", "relative");

    if (tipo == 1) {
        divOverlay.attr({
            "id": "modalOver",
            "class": "modal"
        });
    } else {
        divOverlay.attr({
            "id": "banOverlay",
            "class": "modal"
        });
    }
    altoTotal = c.height();
    anchoTotal = c.width();
    divOverlay.css({
        "position": pos,
        "top": "0",
        "left": "0",
        "width": (anchoTotal * 1.20) + "px",
        "background": color,
        "opacity": ".9",
        "height": "100%",
        'display': 'none',
        "z-index": zposition
    });
    c.append(divOverlay);
    divOverlay.fadeIn("slow", call);
    return $("body").attr("data-banpop", "true");
}

function creaModal(contenedor, tipo, contenido) {
    pos = (tipo == 1) ? 'absolute' : 'fixed';
    var c = $(contenedor);
    divContent = $("<div>");
    divCerrar = $("<div>");
    divCerrar.attr({
        "id": "cerrarBtn",
        "class": "modal"
    });
    divCerrar.css({
        "position": "absolute",
        "top": "0",
        "right": "0",
        "background": "url(../img/botones/cerrar.png) center",
        "width": "30px",
        "height": "30px",
        "cursor": "pointer"
    });
    divCerrar.click(destruyeOverlay);

    divContent.attr({
        "id": "contentOverlay",
        "class": "modal"
    });
    divContent.css({
        "position": pos,
        "top": "0",
        "left": "50%",
        "width": (anchoTotal - 140) + "px",
        "padding": "40px",
        "height": (altoTotal / 2) + "px",
        "border": "1px solid black",
        "display": "block",
        "z-index": "1000",
        "box-shadow": "0 0 5px #ccc",
        "overflow": "auto",
        "background": "white",
        "margin-left": "-",
        "margin-top": "10%"
    });
    divContent.css({
        "margin-left": "-" + ((divContent.width() / 2) + 40) + "px"
    })
    divContent.fadeIn("slow");
    c.append(divContent);
    divContent.load(contenido, function() {
        divContent.append(divCerrar);
        // divContent.append("");
    });

}


function destruyeOver() {
    $("#modalOver").fadeOut("slow", function() {
        $("#modalOver").remove();
    });
    $("#contentOverlay").fadeOut("slow", function() {
        $("#contentOverlay").remove();
    });
}



function destruyeOverlay() {
    if ($("body").attr("data-banpop") == "true") {
        $(".modal").each(function() {
            $(this).fadeOut("slow", function() {
                $(this).remove();
            })
        });

        return false;

    }
}

/*Transicion de pasos*/
function cambiaFlujo(step) {
    var npasos = $(".pasos").size();
    $(".pasos").each(function(index) {
        if ((++index) == npasos) {
            $(this).fadeOut("slow", function() {
                $(step).delay(1000).fadeIn();
            });

        } else {
            $(this).fadeOut("slow");
        }
    });
}

function getMask(str, event) {
    console.log(event);
    if (str.length > 9) return str.substring(10, -1);
    if ((str.length > 1 && str.length < 3) || (str.length == 5 && str.length > 3)) return str += "/";
    return str;
}


/****** MOTOR PARA CAMBIAR DE PASOS Y FLUJOS **/ ///

var flujoActivo = "";

function escondeElemento(elemento) {
    e = (elemento == 'f') ? ".flujo" : '.step';
    $(e).each(function() {
        $(this).fadeOut(0);
    });
};

function cambiaFlujo(flujo) {
    if ($(".flujo").is(":animated")) return false;
    escondeElemento('s');
    escondeElemento('f');
    flujoActivo = flujo;
    $(flujoActivo).find(".step").first().css("display", "block");
    $(flujoActivo).fadeIn("slow");
}

function cambiaPaso(paso) {
    flujoActivo = $(flujoActivo);
    escondeElemento("s");
    flujoActivo.find(".step" + paso).fadeIn("slow");


}

/****** FIN DE MOTOR PARA CAMBIAR DE PASOS Y FLUJOS **/ ///

/*Funcion realizada por victor: Cambio de pasos*/
function cambiaPaso(paso) {
    flujoActivo = $(flujoActivo);
    escondeElemento("s");
    flujoActivo.find(".step" + paso).fadeIn("slow");
    pasoPos = "-2px";
    switch (paso) {
        case 0:
            pasoPos = "-2px"
            break;
        case 1:
            pasoPos = "-2px"
            break;
        case 2:
            pasoPos = "-26px"
            break;

        case 3:
            pasoPos = "-50px"
            break;
        case 4:
            pasoPos = "-50px"
            break;
        case 5:
            pasoPos = "-50px"
            break;
        default:
            alert("el paso seleccionado no se encuentra registrado");
            break;

    }

    $("#WA_pasos > img").css("margin-top", pasoPos);
}
/*Fin de Funcion realizada por victor: Cambio de pasos*/

/*--- Token Victor---*/

/*function cargaToken(cbTokenCanc,cbTokenAcep,fn){
  if(typeof fn !="undefined" || fn != null || fn != undefined) fn();
  $("#elementBloqueo").load("../modales/token.html",function(){
    $(this).find("#btnTokenCancelar").attr("onclick",cbTokenCanc);
    $(this).find("#btnTokenAceptar").attr("onclick",cbTokenAcep);
    switchModal();
  });  
}*/

//Pendiente para aprobacion
function cargaToken(cbTokenCanc, cbTokenAcep, fn, modal) {
    var mod = modal || 'token';
    if (typeof fn != "undefined" || fn != null || fn != undefined) fn();
    $("#elementBloqueo").load("../modales/" + mod + ".html", function() {
        $(this).find("#btnTokenCancelar").attr("onclick", cbTokenCanc);
        $(this).find("#btnTokenAceptar").attr("onclick", cbTokenAcep);
        switchModal();
    });
}

function confirmacionCorreo(cbTokenCanc, cbTokenAcep, modal) {
    var mod = modal || 'token';
    $(".bloqueoElement").fadeOut("slow", function() {
        $("#elementBloqueo").load("../modales/" + mod + ".html", function() {
            $(this).find("#btnTokenCancelar").attr("onclick", cbTokenCanc);
            $(this).find("#btnTokenAceptar").attr("onclick", cbTokenAcep);
            centraModal();
            $(".bloqueoElement").fadeIn("slow");
        });
    });
}

function cargaCalendario(cbTokenAcep, modal) {
    var mod = modal || 'token';
    $("#elementBloqueo").load("../modales/" + mod + ".html", function() {
        $(this).find("#btnCalendarioAceptar").attr("onclick", cbTokenAcep);
        switchModal();
    });
}

function cargaTokentime(fn, modal) {
    var mod = modal || 'token';
    if (typeof fn != "undefined" || fn != null || fn != undefined) fn();
    $("#elementBloqueo").load("../modales/" + mod + ".html");
    switchModal();
}

/*--- Fin Token Victor ---*/

function centraModal() {
    w = $("#widampliado")
    t = $("#elementBloqueo")
    wh = w.height();
    th = t.height();
    tth = wh - th;
    ww = w.width();
    tw = t.width();
    ttw = ww - tw;
    $("#elementBloqueo").css({
        "top": (tth / 3.5) + "px",
        left: (ttw / 2) + "px"
    });
}

function switchModal() {
    centraModal();
    $(".bloqueoElement").fadeToggle("slow");
}

function timeModal() {
    setTimeout(function() {
        centraModal();
        $(".bloqueoElement").fadeOut("slow;");
    }, 2000);
}
/*--- Funcion para construir el Switch

NOTA: Como parametro solo se recibira el id del div.
ej. HTML
<div id="switchBox"></div>
ej. Js ( se llama la funcion al inicializar el js correspondiente.)
 construyeSwitch('switchBox');
---*/
function construyeSwitch(object) {

    var switchO = '<div class="switchSlide">';
    switchO += '<div class="switchLabel">si</div>';
    switchO += '<div class="switchIndicador"><div class="franjaSwitch"></div></div>';
    switchO += '<div class="switchLabelR">no</div>';
    switchO += '</div>';

    var container = $("#" + object).length ? $("#" + object) : $("." + object);

    container.html(switchO);

    container.children("div:first").find(".switchLabel").click(function() {
console.log(this);
        $(this).parent(".switchSlide").animate({
            "left": "-=78px"
        }, "fast");
        //$(".dateInput").addClass("dateInputInactive");
        //$(".notificacion").hide();

    });

    container.children("div:first").find(".switchLabelR").click(function() {
        console.log(this);
       $(this).parent(".switchSlide").animate({
            "left": "+=78px"
        }, "fast");
        //$(".dateInput").removeClass("dateInputInactive");
        //$(".notificacion").show();
    });
}

/*--- Fin de Funcion para construir el Switch ---*/



/* GRID DINAMICO */
/*

  BODY OF JSON DATA
  {colums:[1,2,3,4,5],rowsValues:[1,2,3,4,5],numRows:30}

*/
function Gridius(object, data) {
    $(".toolsGrid").remove();
    $.when($.ajax("componentes/grid.html")).then(function(res) {

        object.html(res);

        var element = "";

        if (typeof data == "undefined") {

            element = '<td>Lorem Ipsum<input data-edit="false" class="editGrid" type="text"></td>';
            element += '<td>Lorem Ipsum<input data-edit="false" class="editGrid" type="text"></td>';
            element += '<td>Lorem<input data-edit="false" class="editGrid" type="text"></td>';
            element += '<td>1234<input data-edit="false" class="editGrid" type="text"></td>';
            element += '<td>1234567890<input data-edit="false" class="editGrid" type="text"></td>';
            element += '<td>dd/mm/aaaa<input data-edit="false" class="editGrid" type="text"></td>';
            element += '<td>999,999,999.00<input data-edit="false" class="editGrid" type="text"></td>';
            element += '<td>Exitosa<input data-edit="false" class="editGrid" type="text"></td>';
            element += '<td><div class="addGrid"></div><div class="delGrid"></div></td>';

        } else {
            var thead;
            $.each(data.colums, function(i, v) {
                thead += "<th>" + v + "</th>";
            });

            var totalElem = data.numRows || 10;
            var keeper = "";
            for (i = 0; i <= totalElem; i++) {
                element += "<tr data-id='" + i + "'>";
                for (u = 0; u < data.rowsValues.length; u++) {

                    element += "<td>" + data.rowsValues[u] + "<input data-edit='false' class='editGrid' type='text'></td>";
                }
                element += (data.configButton ? "<td><div class='addGrid'></div><div class='delGrid'></div></td>" : "") + "</tr>";
                if (i == 0) keeper = element;
            }

            var aprov = $(keeper);
            var program = aprov.clone();
            var denied = aprov.clone();
            aprov.attr("data-id", '100').find(".editGrid:last").parent().addClass("aprov").text("Exitosa");
            program.attr("data-id", '101').find(".editGrid:last").parent().addClass("program").text("Programada");
            denied.attr("data-id", '102').find(".editGrid:last").parent().addClass("denied").text("Cancelada");

            $(".wrapGrid > table").html("<tr>" + thead + "</tr>");
            if (data.hasStatus) $(".wrapGrid > table").append(aprov).append(program).append(denied);
            $(".wrapGrid > table").append(element);

        }

        $(".gridAdd").click(function() {
            var obj = $('<tr data-id="' + ($(".wrapGrid").find("tr").size()) + '"></tr>');
            $(".wrapGrid > table").append(obj);
            $('[data-id="' + (($(".wrapGrid").find("tr").size()) - 1) + '"]').html(element);
            listenerGrid($('[data-id="' + ($(".wrapGrid").find("tr").size()) + '"]').find('.editGrid').parent());
        });

        $(".editGrid").parent().on("click", function() {
            listenerGrid($(this));
        });

        $(".addGrid").click(function() {
            var self = $(this);
            self.next(".delGrid").toggle();
            showGridTools(self);
            self.toggle();
        });

        $(".delGrid").click(function() {
            var self = $(this);
            self.prev(".addGrid").toggle();
            showGridTools(self);
            self.toggle();
        });

    });
}

function listenerGrid(obj) {
    $(".editGrid").each(function(i, v) {
        v = $(v);
        if (v.attr("data-edit") == "true") v.parent().html(v.val() + '<input data-edit="false" class="editGrid" type="text">');
    });
    var self = obj,
        txt = self.text(),
        adq = self.children(".editGrid"),
        edit = adq.attr("data-edit");
    $(".editGrid").parent();
    if (edit == "true") return false;
    else adq.attr("data-edit", "true");
    self.html(adq);
    adq.val(txt).show();

}

function showGridTools(obj) {
    var parentObj = obj.parent().parent();
    $(".toolsGrid").fadeOut("slow").remove();
    if (parentObj.attr('data-active') == 'true') {
        parentObj.attr('data-active', false);
        return false;
    }
    parentObj.attr('data-active', true);
    var options = [$('<li><img src="../img/assets/basura.png"/></li>'), $('<li><img src="../img/assets/editar.png"/></li>'), $('<li><img src="../img/assets/imprimir.png"/></li>')];
    var toolsList = $("<ul>");
    if (parentObj.children("td:last").prev().hasClass("aprov")) {
        options[2].attr("onclick", 'print(this)');
    } else if (parentObj.children("td:last").prev().hasClass("program")) {
        options[1].attr("onclick", 'edit(this)');
    }
    $.each(options, function(i, v) {
        v.appendTo(toolsList);
    })
    var tools = $('<div class="toolsGrid"></div>');
    toolsList.appendTo(tools);
    $('body').append(tools);
    tools.css({
        top: obj.offset().top - 56,
        left: ($('[instanced="true"]').offset().left + $('[instanced="true"]').width() + 20)
    }).attr('data-relid', parentObj.attr('data-id'));
}

function cargaHtml(componente, url) {
    $(componente).load(url);
}

function print(obj) {
    var q = "";
    if(obj=="step3"){
        q = ".resetMargen:first"
    }else q = ".wrapGrid";
    $(q).printThis({
        debug: false,
        importCSS: true,
        printContainer: true,
        //      loadCSS: "path/to/my.css", 
        pageTitle: "",
        removeInline: false
    });

}

function edit(obj) {
    var idrel = $(obj).parent().parent().parent().attr("data-relid");
    $("[data-id='" + idrel + "']:nth-child(2)").find(".editGrid").show();
}

function el() {
    $(".fg").css("display", "none");
}

function elf() {
    $(".fg").css("display", "inline");
}