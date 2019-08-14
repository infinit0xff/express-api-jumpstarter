import dotenv from 'dotenv';
dotenv.config()

var mongoUri;

// production, fallback development.
if (process.env.NODE_ENV === 'production')
    mongoUri = process.env.MONGODB_URI
else
    mongoUri = 'mongodb://localhost/test_db'

export default {
   "port": 3000,
   "mongoUrl": mongoUri,
    "bodyLimit": "100kb"
}