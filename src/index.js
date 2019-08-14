import http from 'http';
import express from 'express';

let app = express();
app.server = http.createServer(app);

app.use('/',(req, res, next) => {
    res.status(200).json({
        message: 'API is alive!'
    }); 
});

app.server.listen(3000, (err, status) => {
    if(err){
        // handle server start error.
    }
    console.log(`server running on port ${app.server.address().port}`);
});

module.exports = {
    app
}