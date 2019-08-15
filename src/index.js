import http from 'http';
import express from 'express';
import routes from './routes';
import config from './config';

let app = express();
app.server = http.createServer(app);

// '/v1' routes.
app.use('/v1', routes);

// display banner on '/' route.
app.get('/',(req, res, next) => {
    res.send('API is Alive!');
});

app.server.listen(process.env.PORT || config.port, (err, status) => {
    if(err){
        // handle server start error.
    }
    console.log(`server running on port ${app.server.address().port}`);
});

module.exports = {
    app
}