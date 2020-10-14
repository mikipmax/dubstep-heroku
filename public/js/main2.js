window.addEventListener("load", function () {
    var info = $("#info").val();
    var info1 = $("#info1").val();
    var info2 = $("#info2").val();
    var info3 = $("#info3").val();
    $.ajax({
        type: "GET",
        url: "https://dubstep-app.herokuapp.com/todo1",
        dataType: "json",
        contentType: "text/plain"
    }).done(function (msg) {
        var b;
        for (var dato in msg[0])
        {

            if (info === msg[0][dato].id) {
                $("#c1").val(msg[0][dato].info);
            }
            if (info1 === msg[0][dato].id) {
                $("#c2").val(msg[0][dato].info);
            }
            if (info2 === msg[0][dato].id) {
                $("#c3").val(msg[0][dato].info);
            }
            if (info3 === msg[0][dato].id) {
                $("#c4").val(msg[0][dato].info);
            }

        }

        $("#cam").click(function () {

            var id = $("#info").val();
            var inf = $("#c1").val();
            datos = {"id": id, "info": inf};
            $.ajax({
                type: "PUT",
                url: "https://dubstep-app.herokuapp.com/todo1",
                dataType: "text",
                contentType: "application/json",
                data: JSON.stringify(datos)
            }).done(function (msg) {
                $("#c5").val("Se ha modificado correctamente :D ");
            });
        });
        $("#cam1").click(function () {

            var id = $("#info1").val();
            var inf = $("#c2").val();
            datos = {"id": id, "info": inf};
            $.ajax({
                type: "PUT",
                url: "https://dubstep-app.herokuapp.com/todo1",
                dataType: "text",
                contentType: "application/json",
                data: JSON.stringify(datos)
            }).done(function (msg) {
                $("#c5").val("Se ha modificado correctamente :D ");
            });
        });
        $("#cam2").click(function () {

            var id = $("#info2").val();
            var inf = $("#c3").val();
            datos = {"id": id, "info": inf};
            $.ajax({
                type: "PUT",
                url: "https://dubstep-app.herokuapp.com/todo1",
                dataType: "text",
                contentType: "application/json",
                data: JSON.stringify(datos)
            }).done(function (msg) {
                $("#c5").val("Se ha modificado correctamente :D ");
            });
        });
        $("#cam3").click(function () {

            var id = $("#info3").val();
            var inf = $("#c4").val();
            datos = {"id": id, "info": inf};
            $.ajax({
                type: "PUT",
                url: "https://dubstep-app.herokuapp.com/todo1",
                dataType: "text",
                contentType: "application/json",
                data: JSON.stringify(datos)
            }).done(function (msg) {
                $("#c5").val("Se ha modificado correctamente :D ");
            });
        });
    });


    document.querySelector("#camb").addEventListener("click", function () {
        document.querySelector("#cb").disabled = true;
    });
    document.querySelector("#camb1").addEventListener("click", function () {
        document.querySelector("#cb1").disabled = true;
    });
    document.querySelector("#camb2").addEventListener("click", function () {
        document.querySelector("#cb2").disabled = true;
    });
    document.querySelector("#btnDes").addEventListener("click", function () {
        window.open("https://mega.nz/#start");
    });
    document.querySelector("#us2").addEventListener("click", function () {
        window.location = "index.html";
    });
    $("#btnus1").click(function () {

        $("#in").hide();
        $("#in6").show();
        $("#in8").hide();
        $("#in1").hide();



    });


    $("#btnnomb").click(function () {
        var nm = $("#nomb").val();
        var co = $("#nomb2").val();
        var ct = $("#nomb4").val();
        datos = {"usuario": "mikipmax", "nombre": nm, "correo": co, "password": ct};
        $.ajax({
            type: "PUT",
            url: "https://dubstep-app.herokuapp.com/todo",
            dataType: "text",
            contentType: "application/json",
            data: JSON.stringify(datos)
        }).done(function (msg) {
            $("#c9").val("Se ha modificado correctamente :D ");
        });
    });
    $("#btnnomb2").click(function () {
        var nm = $("#nomb").val();
        var co = $("#nomb2").val();
        var ct = $("#nomb4").val();
        datos = {"usuario": "mikipmax", "correo": co, "nombre": nm, "password": ct};
        $.ajax({
            type: "PUT",
            url: "https://dubstep-app.herokuapp.com/todo",
            dataType: "text",
            contentType: "application/json",
            data: JSON.stringify(datos)
        }).done(function (msg) {
            $("#c9").val("Se ha modificado correctamente :D ");
        });
    });

    $("#btnnomb4").click(function () {
        var nm = $("#nomb").val();
        var co = $("#nomb2").val();
        var ct = $("#nomb4").val();
        datos = {"usuario": "mikipmax", "password": ct, "nombre": nm, "correo": co};
        $.ajax({
            type: "PUT",
            url: "https://dubstep-app.herokuapp.com/todo",
            dataType: "text",
            contentType: "application/json",
            data: JSON.stringify(datos)
        }).done(function (msg) {
            $("#c9").val("Se ha modificado correctamente :D ");
        });
    });
    document.querySelector("#btnLegal").addEventListener("click", function () {
        document.querySelector("#in1").style.display = "block";
        document.querySelector("#in").style.display = "none";
        document.querySelector("#in6").style.display = "none";
        document.querySelector("#in8").style.display = "none";
    });
    document.querySelector("#btnAbout").addEventListener("click", function () {
        document.querySelector("#in1").style.display = "none";
        document.querySelector("#in").style.display = "none";
        document.querySelector("#in6").style.display = "none";
        document.querySelector("#in8").style.display = "block";
    });

    document.querySelector("#btnInicio").addEventListener("click", function () {
        window.location = "index2.html";
    });
    document.querySelector("#btngm").addEventListener("click", function () {
        var html = "<table id=tab >"
                ;
        var msc = ["20 Project T (Martin Garrix)", "19 Virus (How About Now)",
            "18 How We Do", "17 Howl At the Moon ", "16 Bounce Generation ",
            "15 Raise Your Hands", "14 Lrad", "13 Gold Skies (feat. Aleesia)", "12 Bigfoot",
            "11 Take Me Home (feat. Bebe Rexha)", "10 Million Voices", "09 Like Home (Radio Edit)",
            "08 Tremor (UK Edit)", "07 Booyah (feat. We Are Loud & Sonny",
            "06 Dare You (feat. Matthew Koma)", "05 Tsunami (Radio Edit)",
            "04 This Is What It Feels Like", "03 Animals", "02 Summer (R3hab & Ummet Ozcan Remix",
            "01 Bad (feat. Vassy) [Radio Edit]"

        ];
        for (var i = msc.length - 1, contador = 0; i > -1; i--, contador++) {
            html += "<tr>";
            html += "<td class=mf id=lis" + contador + ">" + msc[i] + "</td>";
            html += "<td>" + "<input  value=Eliminiar type=button id=b" + contador + ">" + "</td>";
            html += "</tr>";
        }
        /*"<img src=img/des.gif width=120px height=30px class=desc id=m" + contador + ">"*/
        html += "</table>";
        document.querySelector('#contenido').innerHTML = html;
        document.querySelector("#b0").addEventListener("click", function () {
            document.querySelector("#lis0").style.display = "none";
            document.querySelector("#b0").style.display = "none";
        });
        document.querySelector("#b1").addEventListener("click", function () {
            document.querySelector("#lis1").style.display = "none";
            document.querySelector("#b1").style.display = "none";
        });
        document.querySelector("#b2").addEventListener("click", function () {
            document.querySelector("#lis2").style.display = "none";
            document.querySelector("#b2").style.display = "none";
        });
        document.querySelector("#b3").addEventListener("click", function () {
            document.querySelector("#lis3").style.display = "none";
            document.querySelector("#b3").style.display = "none";
        });
        document.querySelector("#b4").addEventListener("click", function () {
            document.querySelector("#lis4").style.display = "none";
            document.querySelector("#b4").style.display = "none";
        });
        document.querySelector("#b5").addEventListener("click", function () {
            document.querySelector("#lis5").style.display = "none";
            document.querySelector("#b5").style.display = "none";
        });
        document.querySelector("#b6").addEventListener("click", function () {
            document.querySelector("#lis6").style.display = "none";
            document.querySelector("#b6").style.display = "none";
        });
        document.querySelector("#b7").addEventListener("click", function () {
            document.querySelector("#lis7").style.display = "none";
            document.querySelector("#b7").style.display = "none";
        });
        document.querySelector("#b8").addEventListener("click", function () {
            document.querySelector("#lis8").style.display = "none";
            document.querySelector("#b8").style.display = "none";
        });
        document.querySelector("#b9").addEventListener("click", function () {
            document.querySelector("#lis9").style.display = "none";
            document.querySelector("#b9").style.display = "none";
        });
        document.querySelector("#b10").addEventListener("click", function () {
            document.querySelector("#lis10").style.display = "none";
            document.querySelector("#b10").style.display = "none";
        });
        document.querySelector("#b11").addEventListener("click", function () {
            document.querySelector("#lis11").style.display = "none";
            document.querySelector("#b11").style.display = "none";
        });
        document.querySelector("#b12").addEventListener("click", function () {
            document.querySelector("#lis12").style.display = "none";
            document.querySelector("#b12").style.display = "none";
        });
        document.querySelector("#b13").addEventListener("click", function () {
            document.querySelector("#lis13").style.display = "none";
            document.querySelector("#b13").style.display = "none";
        });
        document.querySelector("#b14").addEventListener("click", function () {
            document.querySelector("#lis14").style.display = "none";
            document.querySelector("#b14").style.display = "none";
        });
        document.querySelector("#b15").addEventListener("click", function () {
            document.querySelector("#lis15").style.display = "none";
            document.querySelector("#b15").style.display = "none";
        });
        document.querySelector("#b16").addEventListener("click", function () {
            document.querySelector("#lis16").style.display = "none";
            document.querySelector("#b16").style.display = "none";
        });
        document.querySelector("#b17").addEventListener("click", function () {
            document.querySelector("#lis17").style.display = "none";
            document.querySelector("#b17").style.display = "none";
        });
        document.querySelector("#b18").addEventListener("click", function () {
            document.querySelector("#lis18").style.display = "none";
            document.querySelector("#b18").style.display = "none";
        });
        document.querySelector("#b19").addEventListener("click", function () {
            document.querySelector("#lis19").style.display = "none";
            document.querySelector("#b19").style.display = "none";
        });
    });
    $("#btngm1").click(function () {
//<div id="users">


        var html = "<div id=users>"
                + "<table id=tab  >"
                + "<tbody class=list>";
        var msc = [" First Of The Year (Equinox)", " Gypsyhook ",
            " Make It Bun Dem (Original Mix)", "Skrillex - The Reason", "Drop It Hard ",
            "Scary Monsters And Nice Sprites", " Mora (vs. LAZRtag)", "Araiza - Destrucci�n hipers�nica", "Avicii - Addicted To You",
            "David Guetta   Miami Ultra Music Festival 2014", "David Guetta - Lovers On The Sun", "David Guetta &amp; Showtek - Bad ft. Vassy (Official Audio)",
            "DJ AronBri - The Hoods 2014", "DJ Skorp - The Jokers _Original Mix_",
            "Electro _ House 2014", "In the Jungle - WstrWill",
            "Live last - SCREAM and SHOUT - SKRILLEX", "Martin Garrix - Animals (Official Video)", "Shark Attack - This is a shark attack (Skrillex Remix)",
            "Shufunk _ Deli J - Do u Wanna"

        ];
        for (var i = msc.length - 1, contador = 0; i > -1; i--, contador++) {
            html += "<tr>";
            html += "<td class=name id=lis" + contador + ">" + msc[i] + "</td>";
            html += "<td>" + "<input type=button value=Eliminar  id=b" + contador + " class=name>" + "</d>";
            html += "</tr>";
            /*"<input type=image  width=30px height=30px  src=img/carrito.png   id=p"+contador+">"*/
        }
        html += "</tbody>" + "</table>" + "</div>";
        document.querySelector('#contenido').innerHTML = html;
        document.querySelector("#b0").addEventListener("click", function () {
            document.querySelector("#lis0").style.display = "none";
            document.querySelector("#b0").style.display = "none";
        });
        document.querySelector("#b1").addEventListener("click", function () {
            document.querySelector("#lis1").style.display = "none";
            document.querySelector("#b1").style.display = "none";
        });
        document.querySelector("#b2").addEventListener("click", function () {
            document.querySelector("#lis2").style.display = "none";
            document.querySelector("#b2").style.display = "none";
        });
        document.querySelector("#b3").addEventListener("click", function () {
            document.querySelector("#lis3").style.display = "none";
            document.querySelector("#b3").style.display = "none";
        });
        document.querySelector("#b4").addEventListener("click", function () {
            document.querySelector("#lis4").style.display = "none";
            document.querySelector("#b4").style.display = "none";
        });
        document.querySelector("#b5").addEventListener("click", function () {
            document.querySelector("#lis5").style.display = "none";
            document.querySelector("#b5").style.display = "none";
        });
        document.querySelector("#b6").addEventListener("click", function () {
            document.querySelector("#lis6").style.display = "none";
            document.querySelector("#b6").style.display = "none";
        });
        document.querySelector("#b7").addEventListener("click", function () {
            document.querySelector("#lis7").style.display = "none";
            document.querySelector("#b7").style.display = "none";
        });
        document.querySelector("#b8").addEventListener("click", function () {
            document.querySelector("#lis8").style.display = "none";
            document.querySelector("#b8").style.display = "none";
        });
        document.querySelector("#b9").addEventListener("click", function () {
            document.querySelector("#lis9").style.display = "none";
            document.querySelector("#b9").style.display = "none";
        });
        document.querySelector("#b10").addEventListener("click", function () {
            document.querySelector("#lis10").style.display = "none";
            document.querySelector("#b10").style.display = "none";
        });
        document.querySelector("#b11").addEventListener("click", function () {
            document.querySelector("#lis11").style.display = "none";
            document.querySelector("#b11").style.display = "none";
        });
        document.querySelector("#b12").addEventListener("click", function () {
            document.querySelector("#lis12").style.display = "none";
            document.querySelector("#b12").style.display = "none";
        });
        document.querySelector("#b13").addEventListener("click", function () {
            document.querySelector("#lis13").style.display = "none";
            document.querySelector("#b13").style.display = "none";
        });
        document.querySelector("#b14").addEventListener("click", function () {
            document.querySelector("#lis14").style.display = "none";
            document.querySelector("#b14").style.display = "none";
        });
        document.querySelector("#b15").addEventListener("click", function () {
            document.querySelector("#lis15").style.display = "none";
            document.querySelector("#b15").style.display = "none";
        });
        document.querySelector("#b16").addEventListener("click", function () {
            document.querySelector("#lis16").style.display = "none";
            document.querySelector("#b16").style.display = "none";
        });
        document.querySelector("#b17").addEventListener("click", function () {
            document.querySelector("#lis17").style.display = "none";
            document.querySelector("#b17").style.display = "none";
        });
        document.querySelector("#b18").addEventListener("click", function () {
            document.querySelector("#lis18").style.display = "none";
            document.querySelector("#b18").style.display = "none";
        });
        document.querySelector("#b19").addEventListener("click", function () {
            document.querySelector("#lis19").style.display = "none";
            document.querySelector("#b19").style.display = "none";
        });
        /*  $("#btngm1").click(function () {
         
         $.ajax({
         type: "GET",
         url: "https://dubstepmusic.herokuapp.com/todo2",
         dataType: "json",
         contentType: "text/plain"
         }).done(function (msg) {
         var htmlpuro = '<table id=tab >';
         
         for (var dato in msg[0])
         {
         var z=msg[0][dato].codigo;
         console.log(z)
         htmlpuro += '<tr>'
         htmlpuro += "<td>" + + "</td>"
         
         htmlpuro += '<td><input   value=Eliminar type=button id=bo" + contador + "></td>';
         htmlpuro += '</tr>'
         }
         htmlpuro += '</table>'
         $("#contenido").html(htmlpuro);
         });
         });
         */
    });
    $("#btngmu").click(function () {
        $.ajax({
            type: "GET",
            url: "https://dubstep-app.herokuapp.com/todo",
            dataType: "json",
            contentType: "text/plain"
        }).done(function (msg) {
            var htmlpuro = '<table id=tab >'
            htmlpuro += "<tr>";
            htmlpuro += "<td><center>Usuario</center></td><td><center>Correo</center></td></tr>";
            var a = 1
            var c = 1;
            var d = 1;
            for (var dato in msg[0])
            {
                htmlpuro += '<tr>';
                htmlpuro += '<td ><input  type=text value=' + msg[0][dato].usuario + ' id=l' + (c++) + 'x></td>';
                htmlpuro += '<td><input type=text  value=' + msg[0][dato].correo + '  id=l' + (a++) + 'y></td>';
                htmlpuro += '<td>' + '<input class=ab type=button value=Eliminar id=' + 'l' + (d++) + '>' + '</td>';
                htmlpuro += '</tr>';
            }

            htmlpuro += '</table>'

            $("#contenido").html(htmlpuro);
            $(".ab").click(function () {
                var nombr = $("#" + $(this).attr('id') + 'x').val();
                if (nombr === "mikipmax") {
                    $("#" + $(this).attr('id')).prop('disabled', true);
                } else {
                    $("#" + $(this).attr('id')).hide();
                    $("#" + $(this).attr('id') + 'x').hide();
                    $("#" + $(this).attr('id') + 'y').hide();
                    var nombr3 = $("#" + $(this).attr('id') + 'x').val();
                    datos = {"usuario": nombr3};
                    $.ajax({
                        type: "DELETE",
                        url: "https://dubstep-app.herokuapp.com/todo",
                        dataType: "text",
                        contentType: "application/json",
                        data: JSON.stringify(datos)
                    }).done(function (msg) {
                        alert(msg);
                    });
                }
            });
        });
    });
    $("#btngmA").click(function () {
        var html = "<table id=tab >";
        html += "<br><tr><td>C�digo de la m�sica</td></tr>";
        html += "<tr><td><input type=text id=txtc></td></tr>";
        html += "<tr><td>Nombre de la m�sica</td></tr>";
        html += "<tr><td><input type=text id=txtm></td></tr>";
        html += "<br><tr><td>Link de la m�sica</td></tr>";
        html += "<tr><td><input type=text id=txtl></td></tr>";
        html += "<tr><td>Subir a:  <input  type=button id=mg value=Gratis><input type=button id=mp value=Pago></td></tr>";
        html += "<br><td><input type=text value=' ' id=c6 disabled=disabled></td>";
        html += "</table>";
        document.querySelector('#contenido').innerHTML = html;
        $("#mg").click(function () {
            var musica = $("#txtm").val();
            var codigo = $("#txtc").val();
            var link = $("#txtl").val();
            datos = {"codigo": codigo, "musica": musica, "link": link};
            $.ajax({
                type: "POST",
                url: "https://dubstep-app.herokuapp.com/todo2",
                dataType: "text",
                contentType: "application/json",
                data: JSON.stringify(datos)
            }).done(function (msg) {
                $("#c6").val("Se ha subido la m�sica correctamente")
            });
        });
        $("#mp").click(function () {
            var musica = $("#txtm").val();
            var codigo = $("#txtc").val();
            datos = {"codigo": codigo, "musica": musica};
            $.ajax({
                type: "POST",
                url: "https://dubstep-app.herokuapp.com/todo2",
                dataType: "text",
                contentType: "application/json",
                data: JSON.stringify(datos)
            }).done(function (msg) {
                $("#c6").val("Se ha subido la m�sica correctamente")
            });
        });
    });
});
