"use strict";

const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const Firebase = require("firebase");

let items = [];



      var firebase = require("firebase-admin");

      
      
      firebase.initializeApp({
        credential: firebase.credential.cert({
  "type": "service_account",
  "project_id": "firebase-proyectodb",
  "private_key_id": "3ba79eb16cfde44e53304755ef1b94d9dd1fb3ad",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC/UqkwoqtHGcVi\nyzSIMFqpB2sO4uDZPZfV9ag5iMYcyhuYb1niyoyybeeTawBPbBlTvvypyNLnrWhX\nnkWoPvwq4NwimxoSsZGr0NxAkxEZ2y2+ylsSYjl0VdBrcwCphVff8h8Ff8E84MeP\nDb5e/HfzG9si1mNiUn+ysB4DQX4dR9CCOE05HV85YmiJ6F0chxvfXTpH5UG1cYER\nhFNRJxhYDkQ46oBvZrOako1bpq+oSxaRRS+YfdJikEln1AZcDP1IJlThZm/jopbX\nmzs7tG3+LCby1qs6Q4A+1XKUKMP7la8MS+h3uYtiOVT+/yzepWwpzZiEUan/vfqC\nTguWk0wrAgMBAAECggEABY1StJhxNlHUomPO5UmF7/7I8rh5xEQfJQnedQuiOCao\npgP2jKLKch5yCHCj+dS4vW8+6iHA9maCrybm0urqVXI2C9kKvifMrZA/kVjTN7gJ\nEU7SVWu9SsIiF2QnIkQ+Lb+wem/f0zJGCEGNWI36CyIv+fL/v6mGOXtr5jX0gMlO\nT+86V1YhaDMQYeAaGCZ02W1EL085Nx94F16Q1Fm7glBOvrn/7CG0ciVz//+S4KJa\neC54qXbQGFp871x4G0l+RarVfCKtD1vN/H1cSvJsVuHyeP8WrsM4nVyF8Vzkz30j\nmfzVQH09N7SjWUIXTWxnSj15Ds2unFaLMF2smwQz6QKBgQD1fHt6DSS7rihbX8Ay\nVqYKgR9DZHC4O7DBJLXU3LiQwgrS+8coGc+Nh6fG4oezjkmkmDuvDM5Dko0VG/IG\nEr9Itpqrf4eCXsyfTAiFhrwinxHKKMcVyOxOt39zBX5Qsdj/U8fAZjls/WvtYLzN\ntr0okOxnqTo2TcvtS3R0nh5mqQKBgQDHhFR9ZWKKr9gAbhc17w/jgVvggteaudiL\n2pdSvcMDr/jvYiT8M1xWZThsfrKCHqQU0fEXj5e/NCvck04BTme4rMRJywWlV6vE\nIW8F+yNrep0szzwo0AEyNoffwrDjXTeMR5b93t308TeDOgH0QOqdBjCi2mihqSFi\nf/t9+avkswKBgQDti5SMaVWHSyKAMOpxi4lGluXit7mffRsv+s78+MycPzhsKvjv\no/JEmOVQPfpkVKaMYEc4v6KEnrZom88Z82AoA5Mtqs086XEGIHQKiXNZ6SU0wzrK\nqM+J6GSqr8EoYsCBadfcJM8i2SNr43UvdsoaDArG0GmlDKjtqVs6UZtHaQKBgB9T\nhbiSnKBN78pRfs93E7WS8AwWPygKGhgLYEsbhG0lyh47+Laokcz2458VXY3Upcqn\nFAWxBBB/bouZjVvjJaH3bnJvsBk/5LZM0ZPM1MjhXaBVgYqe7jEmIrtdZEyurDQY\nYXrG7W6yGRc/mmLxdmTlPem0BU2sspM2qRQkiXrFAoGBAInRZmfZJ6MvJksnCNfv\ng6BejILI/LNae+GXagce/RxHd/oNVO944id5BGDkcMvZ9CVODX3V3IhQUy8ejkzW\n/qurkp3WfV3N9+kvZ0xmaxEQwP3sKFkW5b2vteSm1SARsYCYtrM6RFbit0ssuin2\nTm1wlvaONEu7vHM3hQh6bL29\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-uf0un@firebase-proyectodb.iam.gserviceaccount.com",
  "client_id": "101393641536723839146",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-uf0un%40firebase-proyectodb.iam.gserviceaccount.com"
}),
        databaseURL: "https://proyectodb.firebaseio.com"
      });
   
      var miRuta = firebase.database().ref("/registro");

   let router = express.Router();

router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
router
  .route("/")
  .get(function (request, response) {
    items = [];
    miRuta.once("value", function (snap) {
      let nuevoCliente = snap.val();
      items.push(nuevoCliente);

      return response.send(items);
    });
  })
  .post(function (req, res, next) {
    miRuta.child(req.body.usuario).set(req.body);
    res.status(200).send("Ok");
  })
  .delete(function (req, res, next) {
    miRuta.child(req.body.usuario).remove(function (error) {
      if (error) {
        return res.status(404).send("error de todas");
      }
    });
    return res.status(200).send("ok");
  })
  .put(function (req, res, next) {
    miRuta.child(req.body.usuario).set(req.body);
    res.status(200).send("Se ha modificado el registro");
  });
//--------------------------------
  let items1 = []
  
  var miRuta1 = firebase.database().ref("/informacion");
  let router1 = express.Router()
  router1.use(bodyParser.json());
  router1.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  router1.route('/')
  .get(function(request, response){
  items1 = []
          miRuta1.once("value", function(snap){
          let nuevoCliente1 = snap.val()
                  items1.push(nuevoCliente1)
                  return response.send(items1)
          })
  })
  .put(function(req, res, next){

  miRuta1.child(req.body.id).set(req.body)
          res.status(200).send(req.body.codigo)
  })
  //--------------------------------
  let items2 = []

  var miRuta2 = firebase.database().ref("/musicas");

  let router2 = express.Router()
  router2.use(bodyParser.json());
router2.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
  router2.route('/')
  .get(function(request, response){
  items2 = []
          miRuta2.once("value", function(snap){
          let nuevoCliente2 = snap.val()
                  items.push(nuevoCliente2)

                  return response.send(items)

          })

  })
  .post(function(req, res, next){
  miRuta2.child(req.body.codigo).set(req.body)
          res.status(200).send('Se ha subido correctamente')
  }) 

var port = process.env.PORT || 3000;
console.log(port);
let app = express()
  .use("/todo", router)
  .use("/todo1", router1)
  .use("/todo2", router2)
  //-----------------------------------------------------------

  .use(express.static(__dirname + "/public"))
  .listen(port, () => {
    console.log("servidor listo...");
  });
