
var Lista = new Array();

// Mostra tutte le foto all'avvio oppure in base alla ricerca!
var str;
$(document).ready(function () {

    Campi = new Array();

    // Metti tutti i campi dell'url in una lista:
    for (var i = 1; i < 35; i++) {
        str = "ID" + i
        Campi[i] = getUrlParameter(str);
    }

    // WEB SERVICE PER LA DATA
    link = MADE_Config.server_REST + "/Dati/Data/BW/"
    if (Campi[21] == "") {
        if (Campi[19] == "") {
            link += "1800-1-1/2020-1-1";
        }
        else {
            link += Campi[19] + "/2020-1-1"
        }
    }
    else if (Campi[19] == "") {
        link += "1800-1-1/" + Campi[21]
    }
    else {
        link += Campi[19] + "/" + Campi[21]
    }



    str = "";
    $.get(link, function (data) {
        var str = '';
        var cont = 0;

        for (var i in data) {
            var path = makeImgPath(data[i].file_path);
            var ico64 = makeIco64Path(data[i].file_path);

            if ((data[i].data_da != null) && (data[i].data_da != null)) {
                var DataDa = ((data[0].data_da).split("T")[0]).split("-")[2] + "-" + ((data[0].data_da).split("T")[0]).split("-")[1] + "-" + ((data[0].data_da).split("T")[0]).split("-")[0];
                var DataA = ((data[0].data_a).split("T")[0]).split("-")[2] + "-" + ((data[0].data_a).split("T")[0]).split("-")[1] + "-" + ((data[0].data_a).split("T")[0]).split("-")[0];
            }

            var formati = "";
            formati += data[i].altri_formati;

            var condizione = "";
            condizione += data[i].condizione;

            var Valida_ese_da = "";
            Valida_ese_a += data[i].data_esecuz_da_valid;

            var Valida_ese_a = "";
            Valida_ese_da += data[i].data_esecuz_a_valid;

            var _osservazioni = "";
            _osservazioni += data[i].osservazioni;

            var _acquisizioneData = "";
            _acquisizioneData += data[i].acquisizione_data;

            var Valida_acq = "";
            Valida_acq += data[i].acquisizione_data_valid;

            var Tipo_acq = "";
            Tipo_acq += data[i].acquisizione_tipo;

            var copyright = "";
            copyright += data[i].copyright;

            if (
                Boolean((data[i].codice == Campi[1]) || (Campi[1] == "")) &&
                ((data[i].intestazione.toUpperCase()).includes(Campi[2].toUpperCase())) &&
                ((data[i].tipo_media.toUpperCase()).includes(Campi[3].toUpperCase())) &&
                ((data[i].tiposcheda.toUpperCase()).includes(Campi[4].toUpperCase())) &&
                ((data[i].archivio.toUpperCase()).includes(Campi[5].toUpperCase())) &&
                Boolean((Campi[6] == data[i].id_fondo) || (Campi[6] == "")) &&
                ((data[i].collocazione.toUpperCase()).includes(Campi[7].toUpperCase())) &&
                Boolean((data[i].num_inventario == Campi[8]) || (Campi[8] == "")) &&
                ((data[i].soggetto.toUpperCase()).includes(Campi[9].toUpperCase())) &&
                ((data[i].soggetto_titolo.toUpperCase()).includes(Campi[10].toUpperCase())) &&
                ((data[i].soggetto_descrizione.toUpperCase()).includes(Campi[11].toUpperCase())) &&
                ((data[i].soggetto_specifiche.toUpperCase()).includes(Campi[12].toUpperCase())) &&
                Boolean((data[i].num_negativo == Campi[13]) || (Campi[13] == "")) &&
                (formati.includes(Campi[14].toUpperCase())) &&
                ((data[i].id_serie == Campi[15]) || (Campi[15] == "")) &&
                ((data[i].serie_titolo.toUpperCase()).includes(Campi[16].toUpperCase())) &&
                Boolean((data[i].serie_num_ord == Campi[17]) || (Campi[17] == "")) &&
                ((condizione.toUpperCase()).includes(Campi[18].toUpperCase())) &&
                ((Valida_ese_da.toUpperCase()).includes(Campi[20].toUpperCase())) &&
                ((Valida_ese_a.toUpperCase()).includes(Campi[22].toUpperCase())) &&
                ((_osservazioni.toUpperCase().includes(Campi[23].toUpperCase()))) &&
                ((data[i].fondo_provenienza.toUpperCase()).includes(Campi[24].toUpperCase())) &&
                ((data[i].fondo_provenienza_luogo.toUpperCase()).includes(Campi[25].toUpperCase())) &&
                ((_acquisizioneData).includes(Campi[26])) &&
                ((Valida_acq.toUpperCase()).includes(Campi[27].toUpperCase())) &&
                ((Tipo_acq.toUpperCase()).includes(Campi[28])) &&
                ((copyright.toUpperCase()).includes(Campi[29].toUpperCase()))
                
                )
            {
                Lista[i] = data[i].codice;
                str += '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">'
                str += '<div class="Carta" title="Clicca per altre info" onclick="AltreInfo(' + cont + ')">'
                str += '<center>'
                str += '<img class="img-responsive imgQUADRATA"  src="' + ico64 + '" alt="Card image cap">'
                str += '</center>'
                str += '<div class="InformazioniFoto">'
                str += '<h4 class="TitoloFoto">' + data[i].soggetto.replace("[", "").replace("]", "") + '</h4><br/>'
                str += '<p class="InfoFoto"> ' + data[i].soggetto_descrizione + '<br/><br/>'
                str += 'Album n: ' + data[i].collocazione.replace("ALBUM ", "") + '<br/>'
                str += 'Foto n: ' + data[i].num_inventario + '<br/>'
                str += '</div>'
                str += '</div>'
                str += '</div>'
                cont++;
            }
            
        }
        console.log("Sto mostrando: " + cont);
        if (cont != 0 )
        {
            $("#CarteImmagini").html(str);
        }
        else
        {
            str = '<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">'
            str += '<br/><p>La ricerca <strong>avanzata</strong> non ha prodotto risultati in nessuna foto.</p><br/>'
            str += '<strong>Suggerimenti:</strong>'
            str += '<ul class="lista">'
            str += '<li>Assicurarsi che le parole siano state scritte correttamente.</li>'
            str += '<li>Provare con parole chiave diverse.<br/>'
            str += '<li>Provare con parole chiave più generiche.<br/>'
            str += '</ul>'
            str += '<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">'
            str += '<img class="img-responsive" src="../image/Error.png" />'
            str += '</div>'
            str += '</div>'
            $("#CarteImmagini").html(str);
        }
        
    });    function makeImgPath(file_path) {
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


// Apri la pagina delle info!
function AltreInfo(chiave) {
    window.open('InformazioniFotoAvanz.html?id=' + chiave + '', '_self');
}

function RicercaSemplice() {
    var chiave = "";
    chiave = document.getElementById('AA').value
    window.open('../publ/RicercaSemplice.html?id=' + chiave + '', '_self');
}