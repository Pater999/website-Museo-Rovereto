// Mostra tutte le foto all'avvio oppure in base alla ricerca!
var str;
var Lista = new Array();

$(document).ready(function () {
    var cont = 0;
    var chiave = getUrlParameter('id');
    if (chiave == null || chiave == "")
    {
        link = MADE_Config.server_REST + "/Dati"
    }
    else
    {
        link = MADE_Config.server_REST + "/Dati/All/Contiene/" + chiave
    }
    str = "";
    $.get(link, function (data) {
        var str = '';
 
        for (var i in data) {
            var path = makeImgPath(data[i].file_path);
            var ico64 = makeIco64Path(data[i].file_path);

            if ((data[i].data_da != null) && (data[i].data_da != null)) {
                var DataDa = ((data[0].data_da).split("T")[0]).split("-")[2] + "-" + ((data[0].data_da).split("T")[0]).split("-")[1] + "-" + ((data[0].data_da).split("T")[0]).split("-")[0];
                var DataA = ((data[0].data_a).split("T")[0]).split("-")[2] + "-" + ((data[0].data_a).split("T")[0]).split("-")[1] + "-" + ((data[0].data_a).split("T")[0]).split("-")[0];
            }

            Lista[i] = data[i].codice;
            
            

            str += '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">'
            str += '<div class="Carta" title="Clicca per altre info" onclick="AltreInfo(' + cont + ')">'
            str += '<center>'
            str += '<img class="img-responsive imgQUADRATA"  src="' + ico64 + '" alt="Card image cap">'
            str += '</center>'
            str += '<div class="InformazioniFoto">'
            str += '<h4 class="TitoloFoto">' + data[i].soggetto + '</h4><br/>'
            str += '<p class="InfoFoto"> ' + data[i].soggetto_descrizione + '<br/><br/>'
            str += 'Album n: ' + data[i].collocazione.replace("ALBUM ", "")+ '<br/>'
            str += 'Foto n: ' + data[i].num_inventario + '<br/>'
            str += '</div>'
            str += '</div>'
            str += '</div>'
            cont++;
        }
        console.log("Sto mostrando: " + cont);
        if (cont != 0) {
            $("#CarteImmagini").html(str);
        }
        else {
            str = '<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">'
            str += '<br/><p>La ricerca di "<strong>' + chiave + '</strong>" non ha prodotto risultati in nessuna foto.</p><br/>'
            str += '<strong>Suggerimenti:</strong>'
            str += '<ul class="lista">'
            str += '<li>Assicurarsi che le parole siano state scritte correttamente.</li>'
            str += '<li>Provare con parole chiave diverse.<br/>'
            str += '<li>Provare con parole chiave più generiche.<br/>'
            str += '</ul>'
            str += '</div>'
            str += '<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">'
            str += '<img class="img-responsive" src="../image/Error.png" />'
            str += '</div>'
            $("#CarteImmagini").html(str);
        }
    });
    function makeImgPath(file_path) {
        return MADE_Config.sever_HOME + MADE_Config.img + file_path;
    }

    function makeIco64Path(file_path) {
        return MADE_Config.sever_HOME + MADE_Config.ico128 + file_path;
    }

});


// Restituisci i parametri dell'url
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

// Funzione per ricercare
function RicercaSemplice() {
    var chiave = "";
    chiave = document.getElementById('AA').value
    window.open('RicercaSemplice.html?id=' + chiave + '', '_self');
}
