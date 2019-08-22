import mongoose from 'mongoose';
	import config from './config';
	
	export default mongooseConnection => {
	  let db;
	  // Connect to the database before starting the application server.
	  mongoose.connect(config.mongoUrl, { useNewUrlParser: true }, function (err, database) {
	    if (err) {
			console.log(err);
	    	process.exit(1);
	    }
	    // Save database object from the callback for reuse.
	    db = database;
	    mongooseConnection(db);
	  });
	}