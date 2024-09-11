const aeroporto_router = require("./routes/aeroporto_route");
const caneta_router = require("./routes/caneta_route");
const moto_router = require("./routes/moto_route");
const refrigerante_router = require("./routes/refrigerante_route");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.use("/airport", aeroporto_router);

app.use("/caneta", caneta_router);

app.use("/moto", moto_router);

app.use("/refrigerante", refrigerante_router);


app.listen(port, () => {
    console.log(`Server running in http://localhost:${port} port`);
})
