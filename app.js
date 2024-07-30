import express from "express"

const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send('INDEXAAA');
})

app.listen(port, ()=> {
    console.log('App running on port: ' + port);
});