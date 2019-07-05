function RicercaSemplice() {
    var chiave = "";
    chiave = document.getElementById('AA').value
    window.open('../publ/RicercaSemplice.html?id=' + chiave + '', '_self');
}




// Per settare le select!
$(document).ready(function () {

    var x = document.getElementById("Txt6");
    var option = document.createElement("option");
    option.text = "";
    option.value = "";
    x.add(option);

    var x = document.getElementById("Txt15");
    var option = document.createElement("option");
    option.text = "";
    option.value = "";
    x.add(option);

    link = MADE_Config.server_RESTN + "/Fondi"
    $.get(link, function (data) {
        for (var i in data) {
            var x = document.getElementById("Txt6");
            var option = document.createElement("option");
            option.text = data[i].id_fondo + " - " + data[i].fondo;
            option.value = data[i].id_fondo;
            x.add(option);
        }
    });

    link = MADE_Config.server_RESTN + "/Serie"
    $.get(link, function (data) {
        for (var i in data) {
            var x = document.getElementById("Txt15");
            var option = document.createElement("option");
            option.text = data[i].id_serie;
            option.value = data[i].id_serie;
            x.add(option);
        }
    });
});



function RicercaCompleta() {

    var str = "";
    for (var i = 1; i <= 34; i++ )
    {
        str += "ID" + i + "=" + document.getElementById('Txt' + i).value + "&";
    }
    window.open('VisualizzaCompleta.html?' + str, '_self');
}