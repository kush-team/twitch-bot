/**
 * AuthControllerController
 *
 * @description :: Server-side logic for managing Authcontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
	twitch: function(req, res) {
        TwitchAPIService.auth(req, res);
    }
};

