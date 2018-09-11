/**
 * AuthControllerController
 *
 * @description :: Server-side logic for managing Authcontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');

var TwitchTokenStrategy = require('passport-twitch-token');

passport.use(new TwitchTokenStrategy({
    clientID: sails.config.custom.clientID,
    passReqToCallback: true
}, function(req, accessToken, refreshToken, profile, next) {
    Channel.findOrCreate({'twitch_id': profile.id, name: '#' + profile.username}, {'twitch_id': profile.id, name: '#' + profile.username}).exec(function (error, channel) {
        User.findOrCreate({'twitch_id': profile.id, channel: channel.id, display_name: profile.displayName}, {'twitch_id': profile.id, channel: channel.id, display_name: profile.displayName, avatar: profile._json.logo}).exec(function(error, user) {

            return next(error, user);
        });
    })
}));


module.exports = {
	twitch: function(req, res) {
        passport.authenticate('twitch-token', function(error, user, info) {
            if (error) return res.serverError(error);
            if (info) return res.forbidden(info);
            return res.ok(user);
        })(req, res);
    }
};

