$(document).keydown(function (e) {
    if (Boolean(e.keycode == 37 || e.which == 37) && blocca == false) {
        e.preventDefault();
        if (corrente != 0) {
            corrente--;
            AltreInfo(corrente)
        }
        else {
            corrente = Lista.length - 1;
            AltreInfo(corrente)
        }
    }
    else if (Boolean(e.keycode == 39 || e.which == 39) && blocca == false) {
        e.preventDefault();
        if (corrente != Lista.length - 1) {
            corrente++;
            AltreInfo(corrente);
        }
        else {
            corrente = 0;
            AltreInfo(corrente)
        }
    }
});

var corrente = 0;
var blocca = true;


// Altre Info
function AltreInfo(chiave) {
    blocca = false;
    $(".box").attr("onclick", "location.reload();");
    corrente = chiave;
    var idFoto = Lista[chiave];
    console.log(corrente);
    $.get(MADE_Config.server_REST + "/Dati/Codice/" + idFoto, function (data) {

        if ((data[0].data_da != null) && (data[0].data_da != null)) {
            var DataDa = ((data[0].data_da).split("T")[0]).split("-")[2] + "-" + ((data[0].data_da).split("T")[0]).split("-")[1] + "-" + ((data[0].data_da).split("T")[0]).split("-")[0];
            var DataA = ((data[0].data_a).split("T")[0]).split("-")[2] + "-" + ((data[0].data_a).split("T")[0]).split("-")[1] + "-" + ((data[0].data_a).split("T")[0]).split("-")[0];
        }

        var path = makeImgPath(data[0].file_path);
        var ico64 = makeIco64Path(data[0].file_path);
        var str = "";

        str += '<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">';
        str += '<center><a href="' + path + '"data-fancybox data-type="image" data-caption="' + data[0].intestazione.replace("[", "").replace("]", "") + '">'
        str += '<img id="img" src="' + path + '"class="img-responsive" alt=' + data[0].intestazione.replace("[", "").replace("]", "") + '> <br>';
        str += '</a></center>'

        str += '<table>'
        str += '<tr>'
        str += '<th>Codice:</th>'
        str += '<td style="border-top-right-radius: 10px;-moz-border-radius-topright:10px;-webkit-border-top-right-radius:10px;">' + data[0].codice + '<br>';
        str += '</tr>'
        str += '<th>Intestazione:</th>'
        str += '<td>' + data[0].intestazione + '<br>';
        str += '</tr>'
        str += '<th>Tipo media:</th>'
        str += '<td>' + data[0].tipo_media + '<br>';
        str += '</tr>'
        str += '<tr>'
        str += '<th>Tipo di scheda:</th>'
        str += '<td>' + data[0].tiposcheda + '<br>';
        str += '</tr>'
        str += '<tr>'
        str += '<th>Archivio fotografico:</th>'
        str += '<td>' + data[0].archivio + '<br>';
        str += '</tr>'
        str += '<th>Fondo:</th>'
        str += '<td>' + data[0].id_fondo + '<br>';
        str += '</tr>'
        str += '<th>Collocazione:</th>'
        str += '<td>' + data[0].collocazione + '<br>';
        str += '</tr>'
        str += '<tr>'
        str += '<th>Numero di inventario:</th>'
        str += '<td>' + data[0].num_inventario + '<br>';
        str += '</tr>'
        str += '<tr>'
        str += '<th>Soggetto:</th>'
        str += '<td>' + data[0].soggetto + '<br>';
        str += '</tr>'
        str += '<th>Titolo soggetto:</th>'
        str += '<td>' + data[0].soggetto_titolo.replace("[", "").replace("]", "") + '</td>';
        str += '</tr>'
        str += '<tr>'
        str += '<th>Descrizione soggetto:</th>'
        str += '<td>' + data[0].soggetto_descrizione + '<br>';
        str += '</tr>'
        str += '<tr>'
        str += '<th>Specifiche soggetto:</th>'
        str += '<td>' + data[0].soggetto_specifiche + '<br>';
        str += '</tr>'
        str += '<tr>'
        str += '<th>Numero di negativo:</th>'
        str += '<td>' + data[0].num_negativo + '<br>';
        str += '</tr>'
        str += '<tr>'
        str += '<th>Altri formati:</th>'
        str += '<td>' + data[0].altri_formati + '<br>';
        str += '</tr>'
        str += '</table>'
        str += '</div>';

        str += '<div class="col-lg-8 col-md-6 col-sm-12 col-xs-12">';
        str += '<table>'
        str += '<tr>'
        str += '<th >Identificazione della serie:</th>'
        str += '<td style="border-top-right-radius: 10px;-moz-border-radius-topright:10px;-webkit-border-top-right-radius:10px;">' + data[0].id_serie + '<br>';
        str += '</tr>'
        str += '<th>Titolo della serie:</th>'
        str += '<td>' + data[0].serie_titolo + '<br>';
        str += '</tr>'
        str += '<th>Nr. d\'ordine della serie:</th>'
        str += '<td>' + data[0].serie_num_ord + '<br>';
        str += '</tr>'
        str += '<tr>'
        str += '<th> Condizione generica:</th>'
        str += '<td>' + data[0].condizione + '<br>';
        str += '</tr>'
        str += '<th>Data esecuzione da:</th>'
        str += '<td>' + DataDa + '</td>';
        str += '</tr>'
        str += '<tr>'
        str += '<th>Validità data - Da:</th>'
        str += '<td>' + data[0].data_esecuz_da_valid + '</td>';
        str += '</tr>'
        str += '<tr>'
        str += '<th>Data esecuzione a:</th>'
        str += '<td>' + DataA + '</td>';
        str += '</tr>'
        str += '<tr>'
        str += '<th>Data Esecuzione a:</th>'
        str += '<td>' + data[0].data_esecuz_a_valid + '</td>';
        str += '</tr>'
        str += '<tr>'
        str += '<th>Osservazioni:</th>'
        str += '<td>' + data[0].osservazioni + '</td>';
        str += '</tr>'
        str += '<th>Fondo di provenienza:</th>'
        str += '<td>' + data[0].fondo_provenienza + '</td>';
        str += '</tr>'
        str += '<th>Luogo fondo di prov:</th>'
        str += '<td>' + data[0].fondo_provenienza_luogo + '</td>';
        str += '</tr>'
        str += '<th>Data di Acquisizione:</th>'
        str += '<td>' + data[0].acquisizione_data + '</td>';
        str += '</tr>'
        str += '<th>Validità data di acquisizione:</th>'
        str += '<td>' + data[0].acquisizione_data_valid + '</td>';
        str += '</tr>'
        str += '<th>Tipo di acquisizione:</th>'
        str += '<td>' + data[0].acquisizione_tipo + '</td>';
        str += '</tr>'
        str += '<th>Copyright:</th>'
        str += '<td>' + data[0].copyright + '</td>';
        str += '</tr>'
        str += '<th>Inventari:</th>'
        str += '<td>' + data[0].inventari + '</td>';
        str += '</tr>'
        str += '<th>Committenza:</th>'
        str += '<td>' + data[0].committenza + '</td>';
        str += '</tr>'
        str += '<th>Tipo supporto:</th>'
        str += '<td>' + data[0].tipo_supporto + '</td>';
        str += '</tr>'
        str += '<th>Identificativo di volume:</th>'
        str += '<td>' + data[0].identificativo_volume + '</td>';
        str += '</tr>'
        str += '<tr>'
        str += '<th> Annotazioni :</th>'
        str += '<td>' + data[0].annotazioni + '<br>';
        str += '</tr>'
        str += '</table>'

        str += '</div>';

        $("#CarteImmagini").html(str);
    });

    $('img').on('click', function () {
        var src = $(this).attr('src');
    });

}

// Funzioni per trovare la foto nel database
function makeImgPath(file_path) {
    return MADE_Config.sever_HOME + MADE_Config.img + file_path;
}

function makeIco64Path(file_path) {
    return MADE_Config.sever_HOME + MADE_Config.ico128 + file_path;
}


// Funzione per ricercare
function RicercaSemplice() {
    var chiave = "";
    chiave = document.getElementById('AA').value
    window.open('RicercaSemplice.html?id=' + chiave + '', '_self');
}