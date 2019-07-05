// Funzioni per trovare la foto nel database
function makeImgPath(file_path) {
    return MADE_Config.sever_HOME + MADE_Config.img + file_path;
}

function makeIco64Path(file_path) {
    return MADE_Config.sever_HOME + MADE_Config.ico128 + file_path;
}

var corrente = 0;
var blocca = true;

function AltreInfo(chiave)
{
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
        str += '</div>';


        str += '<div class="col-lg-8 col-md-6 col-sm-12 col-xs-12">';
        str += '<table>'
        str += '<tr>'
        str += '<th style="border-top:0px">Codice:</th>'
        str += '<td style="border-top-right-radius: 10px;-moz-border-radius-topright:10px;-webkit-border-top-right-radius:10px;">' + data[0].codice + '<br>';
        str += '</tr>'
        str += '<tr>'
        str += '<th >Identificazione soggetto:</th>'
        str += '<td >' + data[0].soggetto + '<br>';
        str += '</tr>'
        str += '<tr>'
        str += '<th>Titolo soggetto:</th>'
        str += '<td>' + data[0].soggetto_titolo.replace("[", "").replace("]", "") + '</td>';
        str += '</tr>'
        str += '<tr>'
        str += '<th>Numero album:</th>'
        str += '<td>' + data[0].collocazione + '</td>';
        str += '</tr>'
        str += '<tr>'
        str += '<th>Numero inventario:</th>'
        str += '<td>' + data[0].num_inventario + '</td>';
        str += '</tr>'
        str += '<tr>'
        str += '<th>Descrizione oggetto:</th>'
        str += '<td>' + data[0].soggetto_descrizione + '</td>';
        str += '</tr>'
        str += '<tr>'
        str += '<th>Specifiche oggetto:</th>'
        str += '<td>' + data[0].soggetto_specifiche + '</td>';
        str += '</tr>'
        str += '<tr>'
        str += '<th>Fondo:</th>'
        str += '<td>' + data[0].id_fondo + '</td>';
        str += '</tr>'
        str += '<tr>'
        str += '<th>Serie:</th>'
        str += '<td>' + data[0].id_serie + '</td>';
        str += '</tr>'
        str += '<tr>'
        str += '<th>Data esecuzione da:</th>'
        str += '<td>' + DataDa + '</td>';
        str += '</tr>'
        str += '<tr>'
        str += '<th>Data Esecuzione da:</th>'
        str += '<td>' + data[0].data_esecuz_da_valid + '</td>';
        str += '</tr>'
        str += '<tr>'
        str += '<th>Data esecuzione a:</th>'
        str += '<td>' + DataA + '</td>';
        str += '</tr>'
        str += '<tr>'
        str += '<th style="border-bottom:0px">Data Esecuzione a:</th>'
        str += '<td>' + data[0].data_esecuz_a_valid + '</td>';
        str += '</tr>'
        str += '</table>'
        str += ''
        str += ''
        str += ''
        str += ''
        str += ''
        str += '</div>';

        $.fancybox.defaults.speed = 400;
        $.fancybox.defaults.fullScreen = false;
        $.fancybox.defaults.image.preload = 'auto';
        $.fancybox.defaults.image.protect = true;
        $.fancybox.defaults.touch = true;
        $.fancybox.defaults.focus = true;
        $.fancybox.defaults.autosize = true;
        $.fancybox.defaults.opacity = 'auto';
        $.fancybox.defaults.thumbs = true;


        $("#CarteImmagini").html(str);
    });

    $('img').on('click', function () {
        var src = $(this).attr('src');
    });
}

$(document).keydown(function (e) {
    if (Boolean(e.keycode == 37 || e.which == 37) && blocca == false) {
        e.preventDefault();
        if (corrente != 0)
        {
            corrente--;
            AltreInfo(corrente)
        }
        else
        {
            corrente = Lista.length -1;
            AltreInfo(corrente)
        }
    }
    else if (Boolean(e.keycode == 39 || e.which == 39) && blocca == false) {
        e.preventDefault();
        if (corrente != Lista.length -1)
        {
            corrente++;
            AltreInfo(corrente);
        }
        else
        {
            corrente = 0;
            AltreInfo(corrente)
        }
    }
});

