import express from 'express';
import packageInfo from '../../package.json'
	
let router = express();
	
router.use('/',(req, res, next) => {
    res.status(200).json({
	    name: packageInfo.name,
	    description: packageInfo.description,
	    version: packageInfo.version
	}); 
});
	
export default router;