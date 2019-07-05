function RicercaSemplice() {
    var chiave = "";
    chiave = document.getElementById('AA').value
    window.open('RicercaSemplice.html?id=' + chiave + '', '_self');
}

function RicercaAvanzata()
{
    var Intestazione = document.getElementById('Txt1').value;
    var Fondo = document.getElementById('Txt2').value;
    var Soggetto = document.getElementById('Txt3').value;
    var SoggettoTitolo = document.getElementById('Txt4').value;
    var Serie = document.getElementById('Txt5').value;
    var EsecuzioneDa = document.getElementById('Txt6').value;
    var EsecuzioneA = document.getElementById('Txt7').value;

    window.open('VisualizzaAvanzata.html?intestazione=' + Intestazione + '&fondo=' + Fondo + '&soggetto=' + Soggetto + '&soggtitolo=' + SoggettoTitolo + '&serie=' + Serie + '&esecuzioneda=' + EsecuzioneDa + '&esecuzionea=' + EsecuzioneA + '', '_self');
}

// Funzione per ricercare
function RicercaSemplice() {
    var chiave = "";
    chiave = document.getElementById('AA').value
    window.open('RicercaSemplice.html?id=' + chiave + '', '_self');
}


// IMPOSTA LE SELECT - Crea
$(document).ready(function () {

    var x = document.getElementById("Txt2");
    var option = document.createElement("option");
    option.text = "";
    option.value = "";
    x.add(option);

    var x = document.getElementById("Txt5");
    var option = document.createElement("option");
    option.text = "";
    option.value = "";
    x.add(option);

    link = MADE_Config.server_RESTN + "/Fondi"
    $.get(link, function (data) {
        for (var i in data) {
            var x = document.getElementById("Txt2");
            var option = document.createElement("option");
            option.text = data[i].id_fondo + " - " + data[i].fondo;
            option.value = data[i].id_fondo;
            x.add(option);
        }
    });

    link = MADE_Config.server_RESTN + "/Serie"
    $.get(link, function (data) {
        for (var i in data) {
            var x = document.getElementById("Txt5");
            var option = document.createElement("option");
            option.text = data[i].id_serie;
            option.value = data[i].id_serie;
            x.add(option);
        }
    });
});
