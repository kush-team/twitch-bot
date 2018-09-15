var Request = require("request");
var passport = require('passport');

var TwitchTokenStrategy = require('passport-twitch-token');

passport.use(new TwitchTokenStrategy({
    clientID: sails.config.custom.clientID,
    passReqToCallback: true
}, function(req, accessToken, refreshToken, profile, next) {
    return next(null, profile);
}));


module.exports = { 
    initialize (cb) {
        //
    },

    validate (token) {
        let req = { body: { access_token: token } };
        passport.authenticate('twitch-token', function(error, profile, info) {
            if (profile)
                return true;
            else 
                return false;
        })(req);    
        return true;
    },

    auth (req, res) {
        passport.authenticate('twitch-token', function(error, profile, info) {
            if (error) return res.serverError(error);
            if (info) return res.forbidden(info);
            Channel.findOrCreate({'twitch_id': profile.id, name: '#' + profile.username}, {'twitch_id': profile.id, name: '#' + profile.username}).exec(function (error, channel) {
                User.findOrCreate({'twitch_id': profile.id, channel: channel.id, display_name: profile.displayName}, {'twitch_id': profile.id, channel: channel.id, display_name: profile.displayName, avatar: profile._json.logo}).exec(function(error, user) {
                    return res.ok(user);
                });
            })            
        })(req, res);        
    }
}
