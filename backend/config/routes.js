/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  '/': {
    view: 'pages/homepage'
  },



  'POST /auth/twitch': {
    controller: 'Auth',
    action: 'twitch'
  },

  '/socket/subscribe': {
    controller: 'Socket',
    action: 'subscribe'
  } ,

  '/data/fixture/load': {
    controller: 'Fixture',
    action: 'load'
  },

  'POST /api/v1/winners/:winner/repeat': {
    controller: 'WinnerController',
    action: 'repeat'
  },

  'POST /api/v1/winners/:winner/paid': {
    controller: 'WinnerController',
    action: 'paid'
  },

  'POST /api/v1/spinwheels/:spinwheel/test': {
    controller: 'Spinwheel',
    action: 'test'
  },

};
