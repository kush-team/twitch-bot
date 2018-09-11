/**
 * AuthControllerController
 *
 * @description :: Server-side logic for managing Authcontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
    subscribe: function (req, res, next) {
        var ids, data = req.allParams(), model, subscribed = {};
        var result = {}; 
        Channel.subscribe(req, [data['channel']]);
        result = {success: true};
        res.json(result);    
    }
};

