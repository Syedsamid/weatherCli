import express from "express"

const PORT = 6008;

const app = express();

app.get("/sds",(req, res)=> {
    try {
        res.status(200).send("Hello samid")
    } catch (error) {
        console.log(error);
    }
})

app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
})