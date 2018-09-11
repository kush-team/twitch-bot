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

  'POST /api/v1/spinwheels/test': {
    controller: 'Spinwheel',
    action: 'test'
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
  }

};
