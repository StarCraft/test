/*
* JqNews - JQuery NewsTicker
* Author: Gravagnola Saverio and Iuliano Renato
* Version: 1.0
*/

var newsVisual = 1; // Numero di news da visualizzare - news to be displayed
var intervallo = 5000; // >1500

$(document).ready(function() {
    // Totale news
    var numNews = $("#jqnews").children().length;
    
    // Controllo di overflow
    if (newsVisual > numNews) {
        newsVisual = numNews;
    }

    // Hide delle news superflue all'inizializzazione
    for (var i = newsVisual; i < numNews; i++) {
        $($("#jqnews").children()[i]).css("opacity", "0");
    }
    
    var gestInter = setInterval(jqNewsRotate, intervallo);

    // Gestione del mouseover-mouseout
    $("#jqnews").mouseover(function() { clearInterval(gestInter) });
    $("#jqnews").mouseout(function() { gestInter = setInterval(jqNewsRotate, intervallo); });
});

function jqNewsRotate(_newsVisual) {

    // Inserire lo stesso valore utilizzato per definire l'altezza ed i margini dei div nel file css/style.css
    var altezzaDiv = -18; 
    var margineDiv = 0;

    // Hide della prima news
    $($("#jqnews").children()[0]).animate({ opacity: 0 }, 100, "linear", function() {
    // Movimento verso l'alto
        $($("#jqnews").children()[0]).animate({ marginTop: altezzaDiv }, 300, "linear", function() {
        // Ripristino posizione elemento nascosto
            $($("#jqnews").children()[0]).css("margin", margineDiv);
            // Spostamento in coda dell'elemento nascosto
            $("#jqnews").append($($("#jqnews").children()[0]));
            // Visualizzazione dell'ultima news
            $($("#jqnews").children()[(newsVisual - 1)]).animate({ opacity: 1 }, 600);
        });
    });
}