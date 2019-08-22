export const notFound = ((req, res, next ) => {
	const error = new Error('Not found');
	error.status = 404;
	next(error);
})

export const internalError = ((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	   });
});