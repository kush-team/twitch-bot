
const TOKEN_RE = /^Bearer$/i;

module.exports = function (req, res, next) {
	if (req.headers && req.headers.authorization) {
		const parts = req.headers.authorization.split(' ');
		if (parts.length === 2) {
			const scheme = parts[0];
			const credentials = parts[1];

			if (TOKEN_RE.test(scheme)) {
				if (!TwitchAPIService.validate(credentials)) {
					return res.forbidden();
				}
				next();
			}
		} else {
			return res.forbidden();
		}		
	} else {
		return res.forbidden();
	}
};

