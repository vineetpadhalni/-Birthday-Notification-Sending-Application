const express = require ("express");
const cors = require("cors");
const app = express();
const router = require("./routers/route")
const connectDb = require("./utils/db")
const customMail = require("./controller/sendMail")

const PORT = 8000;

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    Credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", router)

customMail.sendMail();

connectDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log("server is running");
    })
})