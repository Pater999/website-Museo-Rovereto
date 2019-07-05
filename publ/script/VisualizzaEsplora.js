// Mostra tutte le foto all'avvio oppure in base alla ricerca!
var str;
var Lista = new Array();
var cont = 0;

$(document).ready(function () {
    var chiave = getUrlParameter('id');
    link = MADE_Config.server_REST + "/Dati"
    str = "";
    $.get(link, function (data) {
        var str = '';

        for (var i in data) {
            if (chiave == "ARMI")
            {
                if (data[i].soggetto.includes("ARMI") || data[i].soggetto.includes("CONTRAEREA") || data[i].soggetto.includes("CANNONE") || data[i].soggetto.includes("FUCILI") || data[i].soggetto.includes("CANNONI"))
                {
                    var path = makeImgPath(data[i].file_path);
                    var ico64 = makeIco64Path(data[i].file_path);

                    if ((data[i].data_da != null) && (data[i].data_da != null)) {
                        var DataDa = ((data[0].data_da).split("T")[0]).split("-")[2] + "-" + ((data[0].data_da).split("T")[0]).split("-")[1] + "-" + ((data[0].data_da).split("T")[0]).split("-")[0];
                        var DataA = ((data[0].data_a).split("T")[0]).split("-")[2] + "-" + ((data[0].data_a).split("T")[0]).split("-")[1] + "-" + ((data[0].data_a).split("T")[0]).split("-")[0];
                    }

                    Lista[cont] = data[i].codice;

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


            else if (chiave == "TRINCEE") {
                if (data[i].soggetto.includes("TRINCEE") || data[i].soggetto.includes("TRINCEA"))
                {
                    var path = makeImgPath(data[i].file_path);
                    var ico64 = makeIco64Path(data[i].file_path);

                    if ((data[i].data_da != null) && (data[i].data_da != null)) {
                        var DataDa = ((data[0].data_da).split("T")[0]).split("-")[2] + "-" + ((data[0].data_da).split("T")[0]).split("-")[1] + "-" + ((data[0].data_da).split("T")[0]).split("-")[0];
                        var DataA = ((data[0].data_a).split("T")[0]).split("-")[2] + "-" + ((data[0].data_a).split("T")[0]).split("-")[1] + "-" + ((data[0].data_a).split("T")[0]).split("-")[0];
                    }

                    Lista[cont] = data[i].codice;

                    str += '<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">'
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



            else if (chiave == "PAESAGGI") {
                if (data[i].soggetto.includes("PAESAGGI") || data[i].soggetto.includes("VEDUTA") || data[i].soggetto.includes("MONTE") || data[i].soggetto.includes("MONTI") || data[i].soggetto.includes("PANORAMA") ) {
                    var path = makeImgPath(data[i].file_path);
                    var ico64 = makeIco64Path(data[i].file_path);

                    if ((data[i].data_da != null) && (data[i].data_da != null)) {
                        var DataDa = ((data[0].data_da).split("T")[0]).split("-")[2] + "-" + ((data[0].data_da).split("T")[0]).split("-")[1] + "-" + ((data[0].data_da).split("T")[0]).split("-")[0];
                        var DataA = ((data[0].data_a).split("T")[0]).split("-")[2] + "-" + ((data[0].data_a).split("T")[0]).split("-")[1] + "-" + ((data[0].data_a).split("T")[0]).split("-")[0];
                    }

                    Lista[cont] = data[i].codice;

                    str += '<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">'
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

            else if (chiave == "CITTA")
            {
                if (data[i].soggetto.includes("CITTA") || data[i].soggetto.includes("CITTà") || data[i].soggetto.includes("PAESE") || data[i].soggetto.includes("VILLAGGIO") || data[i].soggetto.includes("ROVERETO")) {
                    var path = makeImgPath(data[i].file_path);
                    var ico64 = makeIco64Path(data[i].file_path);

                    if ((data[i].data_da != null) && (data[i].data_da != null)) {
                        var DataDa = ((data[0].data_da).split("T")[0]).split("-")[2] + "-" + ((data[0].data_da).split("T")[0]).split("-")[1] + "-" + ((data[0].data_da).split("T")[0]).split("-")[0];
                        var DataA = ((data[0].data_a).split("T")[0]).split("-")[2] + "-" + ((data[0].data_a).split("T")[0]).split("-")[1] + "-" + ((data[0].data_a).split("T")[0]).split("-")[0];
                    }

                    Lista[cont] = data[i].codice;
                    str += '<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">'
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

            else  {
                if (data[i].soggetto.includes("RITRATTO") || data[i].soggetto.includes("GENERALE") || data[i].soggetto.includes("TENENTE") ) {
                    var path = makeImgPath(data[i].file_path);
                    var ico64 = makeIco64Path(data[i].file_path);

                    if ((data[i].data_da != null) && (data[i].data_da != null)) {
                        var DataDa = ((data[0].data_da).split("T")[0]).split("-")[2] + "-" + ((data[0].data_da).split("T")[0]).split("-")[1] + "-" + ((data[0].data_da).split("T")[0]).split("-")[0];
                        var DataA = ((data[0].data_a).split("T")[0]).split("-")[2] + "-" + ((data[0].data_a).split("T")[0]).split("-")[1] + "-" + ((data[0].data_a).split("T")[0]).split("-")[0];
                    }

                    Lista[cont] = data[i].codice;

                    str += '<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">'
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
            
        }

        $("#CarteImmagini").html(str);
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

// Funzione per ricercare
function RicercaSemplice() {
    var chiave = "";
    chiave = document.getElementById('AA').value
    window.open('RicercaSemplice.html?id=' + chiave + '', '_self');
}

