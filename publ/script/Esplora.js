function RicercaSemplice() {
    var chiave = "";
    chiave = document.getElementById('AA').value
    window.open('RicercaSemplice.html?id=' + chiave + '', '_self');
};

function ApriVisualizza(chiave) {
    window.open('VisualizzaEsplora.html?id=' + chiave + '', '_self');
};


$(document).keydown(function (e) {
    if (e.keycode == 37 || e.which == 37) {
        
        spostaSinistra();
    }
    else if (e.keycode == 39 || e.which == 39)
    {

        spostaDestra();
    }
});


var contatore = 0;
var Categoria = new Array();
Categoria[0] = '<img src="../image/Tutte.png" class="img- responsive img-slide" onclick="RicercaSemplice();" /><div class="SpazioSotto" onclick="RicercaSemplice();"> TUTTE</div >'
Categoria[1] = '<img src="../image/paesaggio.jpg" class="img- responsive img-slide" onclick="ApriVisualizza(\'PAESAGGI\');" /><div class="SpazioSotto" onclick="ApriVisualizza(\'PAESAGGI\');"> PAESAGGI</div >'
Categoria[2] = '<img src="../image/ritratti.jpg" class="img-responsive img-slide" onclick="ApriVisualizza(\'RITRATTI\');" /> <div class="SpazioSotto" onclick="ApriVisualizza(\'RITRATTI\');"> RITRATTI</div >'
Categoria[4] = '<img src="../image/citta.png" class="img-responsive img-slide" onclick="ApriVisualizza(\'CITTA\');" /><div class="SpazioSotto" onclick="ApriVisualizza(\'CITTA\');" > CITTÀ</div >'
Categoria[3] = '<img src="../image/trincee.jpg" class="img-responsive img-slide" onclick="ApriVisualizza(\'TRINCEE\');" /> <div class="SpazioSotto" onclick="ApriVisualizza(\'TRINCEE\');" > TRINCEE</div >'
Categoria[5] = '<img src="../image/armi.png" class="img-responsive img-slide" onclick="ApriVisualizza(\'ARMI\');" /> <div class="SpazioSotto" onclick="ApriVisualizza(\'ARMI\');" > ARMI</div >'

function spostaSinistra() {
    $("#BTN1").prop("disabled", true);
    $("#BTN2").prop("disabled", true);
    clearInterval(myVar);
    if (contatore == 5) {
        contatore = 0;
    }
    else {
        contatore++;
    }
    $("#SLIDE0").fadeOut(1000);
    $("#SLIDE1").fadeOut(1000);
    $("#SLIDE2").fadeOut(1000);
    $("#SLIDE3").fadeOut(1000);
    setTimeout(function () {
        var j = contatore;
        for (var i = 0; i < 4; i++) {
            var str = "#SLIDE" + i.toString();
            $(str).html(Categoria[j]);
            if (j == Categoria.length - 1) {
                j = 0;
            }
            else {
                j++;
            }
        }
    }, 1000);
    setTimeout(function () {
        $("#SLIDE0").fadeIn(1000);
        $("#SLIDE1").fadeIn(1000);
        $("#SLIDE2").fadeIn(1000);
        $("#SLIDE3").fadeIn(1000);
        Loop();
    }, 1000);
    setTimeout(function () {
        $("#BTN1").prop("disabled", false);
        $("#BTN2").prop("disabled", false);
    }, 2000);
}

function spostaDestra() {
    $("#BTN1").prop("disabled", true);
    $("#BTN2").prop("disabled", true);
    clearInterval(myVar);
    if (contatore == 0) {
        contatore = 5;
    }
    else {
        contatore--;
    }
    $("#SLIDE0").fadeOut(1000);
    $("#SLIDE1").fadeOut(1000);
    $("#SLIDE2").fadeOut(1000);
    $("#SLIDE3").fadeOut(1000);
    setTimeout(function () {
        var j = contatore;
        for (var i = 0; i < 4; i++) {
            str = "#SLIDE" + i;
            $(str).html(Categoria[j]);
            if (j == Categoria.length - 1) {
                j = 0;
            }
            else {
                j++;
            }
        }
    }, 1000);
    setTimeout(function () {
        $("#SLIDE0").fadeIn(1000);
        $("#SLIDE1").fadeIn(1000);
        $("#SLIDE2").fadeIn(1000);
        $("#SLIDE3").fadeIn(1000);
        Loop();
    }, 1000);
    setTimeout(function () {
        $("#BTN1").prop("disabled", false);
        $("#BTN2").prop("disabled", false);
    }, 2000);
}

var myVar;

$(document).ready(function () {
    // INIZIALIZZA
    for (var i = 0; i < 4; i++) {
        str = "#SLIDE" + i;
        $(str).html(Categoria[i]);
    }

    // SPOSTA OGNI 5 SECONDI
    Loop()
});

// SPOSTA OGNI 5 SECONDI
function Loop() {
    myVar = setInterval(function () {
        spostaSinistra();
    }, 8000);
}