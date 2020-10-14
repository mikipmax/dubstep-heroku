var canvas = document.querySelector("#miCanvas");
canvas.width = window.screen.availWidth;
canvas.height = window.screen.availHeight;
var imagen = new Image();
imagen.addEventListener("load", function () {
    var rain = new Rain("miCanvas", imagen);
    rain.let_it_snow();
});

imagen.src = "img/snowflake.png";



