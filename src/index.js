import http from 'http';
import express from 'express';
import routes from './routes';

let app = express();
app.server = http.createServer(app);

// '/v1' routes.
app.use('/v1', routes);

// redirect '/' to '/v1'.
app.use('/',(req, res, next) => {
    res.redirect(302, '/v1');
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