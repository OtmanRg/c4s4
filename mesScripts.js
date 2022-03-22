$(document).ready(function() {

    var coucher_heure = 20; // utiliser une API qui récupère l'heure du coucher de soleil
    var coucher_minutes = 38;
    var dateCible = new Date("Mar 22, 2022 15:29:00").getTime();
    console.log("dateCible = ", dateCible);

    incrementation_heure_actuelle();

    function incrementation_heure_actuelle() {
        var date_courante = new Date();
        // console.log("date_courante = ", date_courante);
        var heure_courante = date_courante.getHours();
        var minutes_courante = date_courante.getMinutes();
        var secondes_courante = date_courante.getSeconds();
        if (secondes_courante < 10) {
            secondes_courante = "0" + secondes_courante;
        }
        if (minutes_courante < 10) {
            minutes_courante = "0" + minutes_courante;
        }
        if (heure_courante < 10) {
            heure_courante = "0" + heure_courante;
        }
        $('#p_heure_exacte').text(heure_courante + ":" + minutes_courante + ":" + secondes_courante);

        if (heure_courante >= coucher_heure && minutes_courante >= coucher_minutes) {
            $('body').css('background-color', 'darkblue'); // image 1
        } else {
            $('body').css('background-color', 'white'); // image 2
        }

        var changer = setTimeout(incrementation_heure_actuelle, 1000); // 1000ms
    }


    var x = setInterval(function() {
        var dateCourante = new Date().getTime(); // date en millisecondes
        // console.log("dateCourante = ", dateCourante);
        var diff = dateCible - dateCourante;
        // console.log("diff = ", diff);

        if (diff > 0) {
            var days = Math.floor(diff / (1000 * 60 * 60 * 24));
            var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((diff % (1000 * 60)) / 1000);
            $('#p_compte_a_rebours').text(days + "J, " + hours + "H, " + minutes + "M, " + seconds + "S");
        } else {
            clearInterval(x);
            $('#p_compte_a_rebours').text("Expiré");
        }

    }, 1000);


    // .carousel
    // .image-container
    // #images
    var div_images = document.getElementById("images");
    var img = document.querySelectorAll("#images img");
    console.log("div_images : ", div_images);
    console.log("img : ", img.length);

    var indice = 0;


    var r = setInterval(run, 2000);

    function run() {
        indice++;
        // if (indice > img.length - 1) { indice = 0; }
        div_images.style.transform = "translateX(" + (-indice * 367) + "px)";
    }


    $(div_images).mouseover(function() {
        clearInterval(r);


    });

    $(div_images).mouseleave(function() {
        setInterval(run, 2000);


    });




});