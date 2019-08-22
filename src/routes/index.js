import express from 'express';
import packageInfo from '../../package.json'
import initializeDb from '../db';
import middleware from '../middleware';
import config from '../config';

let router = express();
	
initializeDb(db => {

	// internal middleware for '/v1'.
	router.use(middleware({ config, db }));

	router.get('/',(req, res, next) => {
		res.status(200).json({
			name: packageInfo.name,
			description: packageInfo.description,
			version: packageInfo.version
		}); 
	});
	
});

export default router;