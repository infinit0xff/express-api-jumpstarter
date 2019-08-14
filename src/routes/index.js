import express from 'express';
import packageInfo from '../../package.json'
import initializeDb from '../db';
	
let router = express();
	
initializeDb(db => {
	router.use('/',(req, res, next) => {
		res.status(200).json({
			name: packageInfo.name,
			description: packageInfo.description,
			version: packageInfo.version
		}); 
	});
		
});

export default router;