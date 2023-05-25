//express
// npm install express
const express  = require('express');
const app= express();

//cors npm install cors
const cors = require("cors")
const corsOption = {
    origin: 'http://localhost:5173',
    allowedHeaders:["sessionId","content-Type"],
    allowedHeaders:["sessionId"],
    Credential: true,
    methods: "GET, HEAD,PUT, PATCH POST, DELETE",
    preflightContinue: false, 
};
app.use(cors(corsOption));


// route 
const routes = require("./routes.js");
app.use('/api', routes);

//serveur
app.listen(3000, () => {
    console.log('serveur sur le port 3000');
})