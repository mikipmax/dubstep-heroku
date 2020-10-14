/*var options = {
 valueNames: [ 'name']
 };
 
 var userList = new List('users', options);*/
window.addEventListener("load", function () {

    //para validar el registros ahha

//get ------------------
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

        for (var dato in msg[0])
        {

            if (info === msg[0][dato].id) {
                $("#g").val(msg[0][dato].info);
            }
            if (info1 === msg[0][dato].id) {
                $("#g1").val(msg[0][dato].info);
            }
            if (info2 === msg[0][dato].id) {
                $("#g2").val(msg[0][dato].info);
            }
            if (info3 === msg[0][dato].id) {
                $("#g3").val(msg[0][dato].info);
            }

        }
    });
//--------------------------
    document.querySelector("#txt4").disabled = true;
    document.querySelector("#txt5").disabled = true;
    document.querySelector("#txt5a").disabled = true;
    document.querySelector("#txt6").disabled = true;
    document.querySelector("#txt7").disabled = true;
    document.querySelector("#txt8").disabled = true;
     document.querySelector("#txt9").disabled = true;
    document.querySelector("#abc").disabled = true;
    document.querySelector("#txt1").addEventListener("keyup", function () {

        if (document.querySelector("#txt1").value !== null) {
            document.querySelector("#txt4").disabled = false;

        }
    });

    document.querySelector("#txt4").addEventListener("keyup", function () {
        if (document.querySelector("#txt4").value !== null) {
            document.querySelector("#txt5").disabled = false;
            document.querySelector("#txt5a").disabled = false;
        }
    });
    var vsexo;
    document.querySelector("#txt5").addEventListener("click", function () {

        vsexo = $("#txt5").val();
        document.querySelector("#txt6").disabled = false;


    });
    document.querySelector("#txt5a").addEventListener("click", function () {
        vsexo = $("#txt5a").val();
        document.querySelector("#txt6").disabled = false;

    });
    document.querySelector("#txt6").addEventListener("keyup", function () {
        if (document.querySelector("#txt6").value !== null) {
            document.querySelector("#txt7").disabled = false;
        }


    });
    document.querySelector("#txt7").addEventListener("click", function () {
        if (document.querySelector("#txt7").value !== null) {
            document.querySelector("#txt8").disabled = false;
        }

    });
    document.querySelector("#txt8").addEventListener("click", function () {
        if (document.querySelector("#txt8").value !== null) {
            document.querySelector("#txt9").disabled = false;
        }

    });
    document.querySelector("#txt9").addEventListener("click", function () {

        document.querySelector("#abc").disabled = false;


    });

    $("#abc").click(function () {
        var vnombre = $("#txt1").val();
        var vedad = $("#txt4").val();
        var vcorreo = $("#txt6").val();
        var vusuario = $("#txt7").val();
        var vcon = $("#txt8").val();
        var vpais = $("#txt9").val();

        datos = {"nombre": vnombre, "edad": vedad, "sexo": vsexo, "correo": vcorreo, "usuario": vusuario, "password": vcon, "pais": vpais};

        $.ajax({
            type: "POST",
            url: "https://dubstep-app.herokuapp.com/todo",
            dataType: "text",
            contentType: "application/json",
            data: JSON.stringify(datos)
        }).done(function (msg) {
            alert(msg);
        });
    });



//para validar el ingreso de sesion     
    $("#login").click(function () {

        var user = $("#user").val();
        
        var ps = $("#password").val();
        var bandera=false
        $.ajax({
            type: "GET",
            url: "https://dubstep-app.herokuapp.com/todo",
            dataType: "json",
            contentType: "text/plain"
        }).done(function (msg) {
            console.log(msg[0])
            for (var dato in msg[0])
            {

                if (user === msg[0][dato].usuario && ps === msg[0][dato].password) {
                    if (user === "mikipmax") {
                        bandera=true
                        window.location = "index2.html";
                    } else {
                        window.location = "index1.html";
                    }

                }

            }
            if ((user !== msg[0][dato].usuario && ps !== msg[0][dato].password) ||
                    (user === msg[0][dato].usuario && ps !== msg[0][dato].password) ||
                    (user !== msg[0][dato].usuario && ps === msg[0][dato].password)) {
            if(!bandera){
                $("#mis").val("Has escrito mal tu usuario o password");
            bandera=false    
            }
            }
        });
    });


    document.querySelector("#btnLegal").addEventListener("click", function () {
        document.querySelector("#in").style.display = "none";
        document.querySelector("#in1").style.display = "block";
        document.querySelector("#contenido").style.display = "none";
    });


    document.querySelector("#btnAbout").addEventListener("click", function () {
        document.querySelector("#in").style.display = "none";
        document.querySelector("#in2").style.display = "block";
        document.querySelector("#in1").style.display = "none";
        document.querySelector("#contenido").style.display = "none";
    });


    document.querySelector("#you").addEventListener("click", function () {
        var html = "<h1 id=ly>Dimitri Vegas</h1><audio src=msc/Juicy.mp3 preload=auto controls=controls></audio>";
        document.querySelector("#a1").innerHTML = html;
        document.querySelector("#ly").addEventListener("click", function () {
            window.open(" https://www.youtube.com/watch?v=exJlapzPnlc");
        });
        /*window.open("https://www.youtube.com/watch?v=exJlapzPnlc");*/
    });
    document.querySelector("#you1").addEventListener("click", function () {
        var html = "<h1 id=ly1>Tolouse</h1><audio src=msc/NRTolouse.mp3 preload=auto controls=controls></audio>";
        document.querySelector("#a1").innerHTML = html;
        document.querySelector("#ly1").addEventListener("click", function () {
            window.open(" https://www.youtube.com/watch?v=KrVC5dm5fFc");
        });
        /*window.open(" https://www.youtube.com/watch?v=KrVC5dm5fFc");*/
    });
    document.querySelector("#you2").addEventListener("click", function () {
        var html = "<h1 id=ly2>Sorry for party Rocking</h1><audio src=msc/sfpr.mp3 preload=auto controls=controls></audio>";
        document.querySelector("#a3").innerHTML = html;
        document.querySelector("#ly2").addEventListener("click", function () {
            window.open("https://www.youtube.com/watch?v=SkTt9k4Y-a8");
        });


    });
    document.querySelector("#you3").addEventListener("click", function () {
        var html = "<h1 id=ly3>Mi name is skrillex</h1><audio src=msc/mns.mp3 preload=auto controls=controls></audio>";
        document.querySelector("#a3").innerHTML = html;
        document.querySelector("#ly3").addEventListener("click", function () {
            window.open("https://www.youtube.com/watch?v=6AmJX4zUrUA");
        });

    });
    document.querySelector("#you4").addEventListener("click", function () {
        var html = "<h1 id=ly4>I am an Albatraoz</h1><audio src=msc/ima.mp3 preload=auto controls=controls></audio>";
        document.querySelector("#a5").innerHTML = html;
        document.querySelector("#ly4").addEventListener("click", function () {
            window.open("https://www.youtube.com/watch?v=Bznxx12Ptl0");
        });

    });
    document.querySelector("#you5").addEventListener("click", function () {
        var html = "<h1 id=ly5>Bad (David Gueta)</h1><audio src=msc/smd.mp3 preload=auto controls=controls></audio>";
        document.querySelector("#a5").innerHTML = html;
        document.querySelector("#ly5").addEventListener("click", function () {
            window.open("https://www.youtube.com/watch?v=oC-GflRB0y4");
        });

    });
    document.querySelector("#you6").addEventListener("click", function () {
        var html = "<h1 id=ly6>EarthQuake(Dj Fresh)</h1><audio src=msc/djf.mp3 preload=auto controls=controls></audio>";
        document.querySelector("#a7").innerHTML = html;
        document.querySelector("#ly6").addEventListener("click", function () {
            window.open("https://www.youtube.com/watch?v=UJ30WRNXBZ8");
        });

    });
    document.querySelector("#you7").addEventListener("click", function () {
        var html = "<h1 id=ly7>Dark Horse(Katty Perry)</h1><audio src=msc/kp.mp3 preload=auto controls=controls></audio>";
        document.querySelector("#a7").innerHTML = html;
        document.querySelector("#ly7").addEventListener("click", function () {
            window.open("https://www.youtube.com/watch?v=0KSOMA3QBU0");
        });

    });


    document.querySelector("#btnInicio").addEventListener("click", function () {
        window.location = "index.html";
    });


    document.querySelector("#btngm").addEventListener("click", function () {
        var html = "<div align='center'><table id=tab >";
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
            html += "<td id=mf>" + msc[i] + "</td>";
            html += "<td>" + "<img src=img/reg.png width=180px height=30px class=desc id=m" + contador + ">" + "</td>";
            html += "</tr>";
        }
        /*"<img src=img/des.gif width=120px height=30px class=desc id=m" + contador + ">"*/
        html += "</table></div>";
        document.querySelector('#contenido').innerHTML = html;

        document.querySelector("#m0").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#m1").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#m2").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#m3").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#m4").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#m5").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#m6").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#m7").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#m8").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#m9").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#m10").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#m11").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#m12").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#m13").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#m14").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#m15").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#m16").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#m17").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#m18").addEventListener("click", function () {
            openVentana();
        });
        document.querySelector("#m19").addEventListener("click", function () {
            openVentana();
        });

    });

    document.querySelector("#btngm1").addEventListener("click", function () {
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
            html += "<td class=name>" + msc[i] + "</td>";
            html += "<td>" + "<input type=image  width=180px height=30px  src=img/regc.png   id=p" + contador + " class=name>" + "</d>";
            html += "</tr>";

            /*"<input type=image  width=30px height=30px  src=img/carrito.png   id=p"+contador+">"*/
        }
        html += "</tbody>" + "</table>" + "</div>";
        document.querySelector('#contenido').innerHTML = html;


        document.querySelector("#p0").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#p1").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#p2").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#p3").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#p4").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#p5").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#p6").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#p7").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#p8").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#p9").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#p10").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#p11").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#p12").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#p13").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#p14").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#p15").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#p16").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#p17").addEventListener("click", function () {
            openVentana();
        });

        document.querySelector("#p18").addEventListener("click", function () {
            openVentana();
        });
        document.querySelector("#p19").addEventListener("click", function () {
            openVentana();
        });

    });

});