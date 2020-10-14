window.addEventListener("load", function () {

//para validar cuenta de usuario
    document.querySelector("#btnnomb").addEventListener("click", function () {
        document.querySelector("#nomb").disabled = true;
    });
    document.querySelector("#btnnomb1").addEventListener("click", function () {
        document.querySelector("#nomb1").disabled = true;
    });
    document.querySelector("#btnnomb2").addEventListener("click", function () {
        document.querySelector("#nomb2").disabled = true;
    });
    document.querySelector("#btnnomb3").addEventListener("click", function () {
        document.querySelector("#nomb3").disabled = true;
    });
    document.querySelector("#btnnomb4").addEventListener("click", function () {
        document.querySelector("#nomb4").disabled = true;
    });
    document.querySelector("#acept").addEventListener("click", function () {
        document.querySelector("#listo").value = "Datos guardados correctamente"
    });

//-----------------------------------------------------------------------------------------------------

    document.querySelector("#btnLegal").addEventListener("click", function () {
        document.querySelector("#in").style.display = "none";
        document.querySelector("#in1").style.display = "block";
        document.querySelector("#contenido").style.display = "none";
        document.querySelector("#in2").style.display = "none";
        document.querySelector("#in5").style.display = "none";
    });


    document.querySelector("#btnAbout").addEventListener("click", function () {
        document.querySelector("#in").style.display = "none";
        document.querySelector("#in2").style.display = "block";
        document.querySelector("#in1").style.display = "none";
        document.querySelector("#contenido").style.display = "none";
        document.querySelector("#in5").style.display = "none";
    });

    document.querySelector("#btnus1").addEventListener("click", function () {
        document.querySelector("#in").style.display = "none";
        document.querySelector("#in2").style.display = "none";
        document.querySelector("#in1").style.display = "none";
        document.querySelector("#in5").style.display = "block";
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


    document.querySelector("#us2").addEventListener("click", function () {
        window.location = "index.html";
    });



    document.querySelector("#btnDes").addEventListener("click", function () {
        window.open("https://mega.nz/#!jRBW2CQL!IcHUMEniDgHMyw5jDfJSAIi408WsBVarCGHjSWnKkCE");
    });
    document.querySelector("#btnInicio").addEventListener("click", function () {
        window.location = "index1.html";
    });


    document.querySelector("#d1").addEventListener("click", function () {
        window.open("https://mega.nz/#!3cpRnZpT!kCPFuAYWNFE-FRc3n5SKgPAQHmImM29T9IEFSbIo2uI");
    });
    document.querySelector("#d2").addEventListener("click", function () {
        window.open("https://mega.nz/#!OZJXQCbS!XZIQgCM6uUHGDwev4izV3jMBVA-K3XXDBcjHKliNvOQ");
    });
    document.querySelector("#d3").addEventListener("click", function () {
        window.open("https://mega.nz/#!CRZWlK5J!6T7SUnQa6-gcRB85D9SeGniAlcYkAmprNmTbzgK0gDY");
    });
    document.querySelector("#d4").addEventListener("click", function () {
        window.open("https://mega.nz/#!GRIQTZqb!cdZqRWhEDAoApYMBhLBsNiB528j4XqQoF03Aej4sjSw");
    });
    document.querySelector("#d5").addEventListener("click", function () {
        window.open("https://mega.nz/#!jIJgSCSI!cdQRX-DXNiyLdTSdXQhD2ErodhXybzDaiup9990fPf0");
    });
    document.querySelector("#d6").addEventListener("click", function () {
        window.open("https://mega.nz/#!iNIS0QpI!jGiPCqnRXPgDUC-5Si3lQtH672H5sbf7aAKKm9FlgaY");
    });
    document.querySelector("#d7").addEventListener("click", function () {
        window.open("https://mega.nz/#!zcw1VBya!GlvDeIa8PdxF8o-2vJEn5Q04mQiZ4-aYyyjf9-ujQNg");
    });
    document.querySelector("#d8").addEventListener("click", function () {
        window.open("https://mega.nz/#!OcJz2CjR!3abfSx4yr-KmGXiRShZrChiXHF4Glh_INGXKMjA9euE");
    });


    document.querySelector("#btngm").addEventListener("click", function () {
        var html = "<table id=tab>";

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
            html += "<td>" + msc[i] + "</td>";
            html += "<td>" + "<img src=img/des.gif width=120px height=30px class=desc id=m" + contador + ">" + "</td>";
            html += "</tr>";
        }
        html += "</table >";
        document.querySelector('#contenido').innerHTML = html;



        document.querySelector("#m0").addEventListener("click", function () {
            window.open("https://mega.nz/#!DdJH3biY!MR4EdBu7aKlmQi4V5az9-9DSU1tLD7wQ4bMafXpz8bY");
        });

        document.querySelector("#m1").addEventListener("click", function () {
            window.open("https://mega.nz/#!XcxxlBLT!_V-E0X9lJnPEm0f9db57iBqDuwnxeorBWNRhZU-ew-s");
        });

        document.querySelector("#m2").addEventListener("click", function () {
            window.open("https://mega.nz/#!bZgEFZoR!IzGkw8jbGWahn1NpqsPmCFtc7KgBCwiMI1_psoDSWe0");
        });

        document.querySelector("#m3").addEventListener("click", function () {
            window.open("https://mega.nz/#!bZZkGDSI!yHwONNdlg39aZLNCAp5J-99UXxD6OmXvqVhgDcfkyAU");
        });

        document.querySelector("#m4").addEventListener("click", function () {
            window.open("https://mega.nz/#!ONQxiDCS!ezk6k-GbWt_tLCFDOTn-n0nazt9pREdMiish3bq4a1A");
        });

        document.querySelector("#m5").addEventListener("click", function () {
            window.open("https://mega.nz/#!vdBnUIgR!BGm8UEAVU5-Dx8sP0eFCeYYC91PU-Ci2t7RBPFOkd4Y");
        });

        document.querySelector("#m6").addEventListener("click", function () {
            window.open("https://mega.nz/#!eZwUmLab!ezzX8Np1r09_xzMnr6P4e9g7KhcNq3ZCDyrPQ9o2_qs");
        });

        document.querySelector("#m7").addEventListener("click", function () {
            window.open("https://mega.nz/#!rUIw1RhR!xHBAOLQ4YbuGdpCLfmjINUTrrpMswRij5Bzs1NQi_VY");
        });

        document.querySelector("#m8").addEventListener("click", function () {
            window.open("https://mega.nz/#!mJggSBzQ!zbNtmG3GFZzIhbinGAbKXIa7Oh5nqYG68qS-HuJOzxo");
        });

        document.querySelector("#m9").addEventListener("click", function () {
            window.open("https://mega.nz/#!yYg2xbhY!6-_NmMXTy2Q7oFfTQ8s54BB4Ysq30k0yzx42Vi3jf64");
        });

        document.querySelector("#m10").addEventListener("click", function () {
            window.open("https://mega.nz/#!edhQSTaZ!Jok9xhO58XimRGpt_kom16y8gIeC2SI8wxuxewWpTt0");
        });

        document.querySelector("#m11").addEventListener("click", function () {
            window.open("https://mega.nz/#!nU5nwQaQ!Rz2rQWxcfVwrAKlsgwGxnCkD_sisPyQ-FPa_hFPu8dE");
        });

        document.querySelector("#m12").addEventListener("click", function () {
            window.open("https://mega.nz/#!ORxwWQoK!XSHw4rq2iAHxdZ7iE_XFvdFC3-r5b5xEwsmj_VmrMm4");
        });

        document.querySelector("#m13").addEventListener("click", function () {
            window.open("https://mega.nz/#!zFwFEbSI!_86WyBgW7GKUkL17e-ozgiXFmiw-r7w6FTpo4R0QuQc");
        });

        document.querySelector("#m14").addEventListener("click", function () {
            window.open("https://mega.nz/#!jMw11ISQ!7FxrHQv_CpIMRQLUH07wN0XP-F3SDDC7uOIkqDciv8E");
        });

        document.querySelector("#m15").addEventListener("click", function () {
            window.open("https://mega.nz/#!vQ4inYwa!63O42PxY_XJKZjB3COMpre4HCnC0Lrk0SxsQ6JSnBtw");
        });

        document.querySelector("#m16").addEventListener("click", function () {
            window.open("https://mega.nz/#!GUgBzCSR!suwdIZRobytSFJPZBlrWl734e1B9afdqkB1Myz1f2Is");
        });

        document.querySelector("#m17").addEventListener("click", function () {
            window.open("https://mega.nz/#!KYRFQJbb!8pyvbdxGcCcZ72cZflGu0JNqkzKdAC69aFse4rhQId0");
        });

        document.querySelector("#m18").addEventListener("click", function () {
            window.open("https://mega.nz/#!eNQVVTpK!77QxRVEh5ZvWGHXtPpaC8XHhYP9dQLlxB4RKFIq4M1M");
        });
        document.querySelector("#m19").addEventListener("click", function () {
            window.open("https://mega.nz/#!eNQVVTpK!77QxRVEh5ZvWGHXtPpaC8XHhYP9dQLlxB4RKFIq4M1M");
        });

    });

    document.querySelector("#btngm1").addEventListener("click", function () {
        var html = "<table id=tab>";


        var msc = [" First Of The Year (Equinox)", " Gypsyhook ",
            " Make It Bun Dem (Original Mix)", "Skrillex - The Reason", "Drop It Hard ",
            "Scary Monsters And Nice Sprites", " Mora (vs. LAZRtag)", "Araiza - Destrucción hipersónica", "Avicii - Addicted To You",
            "David Guetta   Miami Ultra Music Festival 2014", "David Guetta - Lovers On The Sun", "David Guetta &amp; Showtek - Bad ft. Vassy (Official Audio)",
            "DJ AronBri - The Hoods 2014", "DJ Skorp - The Jokers _Original Mix_",
            "Electro _ House 2014", "In the Jungle - WstrWill",
            "Live last - SCREAM and SHOUT - SKRILLEX", "Martin Garrix - Animals (Official Video)", "Shark Attack - This is a shark attack (Skrillex Remix)",
            "Shufunk _ Deli J - Do u Wanna"

        ];
        for (var i = msc.length - 1, contador = 0; i > -1; i--, contador++) {
            html += "<tr>";
            html += "<td>" + msc[i] + "</td>";
            html += "<td>" + "<input type=image  width=30px height=30px  src=img/carrito.png   id=p" + contador + ">" + "</d>";
            html += "</tr>";
        }
        html += "</table>";
        document.querySelector('#contenido').innerHTML = html;


        document.querySelector("#p0").addEventListener("click", function () {
            window.open("html/buy.html");

        });

        document.querySelector("#p1").addEventListener("click", function () {
            window.open("html/buy.html");
        });

        document.querySelector("#p2").addEventListener("click", function () {
            window.open("html/buy.html");
        });

        document.querySelector("#p3").addEventListener("click", function () {
            window.open("html/buy.html");
        });

        document.querySelector("#p4").addEventListener("click", function () {
            window.open("html/buy.html");
        });

        document.querySelector("#p5").addEventListener("click", function () {
            window.open("html/buy.html");
        });

        document.querySelector("#p6").addEventListener("click", function () {
            window.open("html/buy.html");
        });

        document.querySelector("#p7").addEventListener("click", function () {
            window.open("html/buy.html");
        });

        document.querySelector("#p8").addEventListener("click", function () {
            window.open("html/buy.html");
        });

        document.querySelector("#p9").addEventListener("click", function () {
            window.open("html/buy.html");
        });

        document.querySelector("#p10").addEventListener("click", function () {
            window.open("html/buy.html");
        });

        document.querySelector("#p11").addEventListener("click", function () {
            window.open("html/buy.html");
        });

        document.querySelector("#p12").addEventListener("click", function () {
            window.open("html/buy.html");
        });

        document.querySelector("#p13").addEventListener("click", function () {
            window.open("html/buy.html");
        });

        document.querySelector("#p14").addEventListener("click", function () {
            window.open("html/buy.html");
        });

        document.querySelector("#p15").addEventListener("click", function () {
            window.open("html/buy.html");
        });

        document.querySelector("#p16").addEventListener("click", function () {
            window.open("html/buy.html");
        });

        document.querySelector("#p17").addEventListener("click", function () {
            window.open("html/buy.html");
        });

        document.querySelector("#p18").addEventListener("click", function () {
            window.open("html/buy.html");
        });
        document.querySelector("#p19").addEventListener("click", function () {
            window.open("html/buy.html");
        });

    });

});