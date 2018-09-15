/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  '*': true,

  ChannelController: {
    '*': 'twitch',
  },

  GreetingController: {
    '*': 'twitch',
  },

  PrizeController: {
    '*': 'twitch',
    'find': true,
  },

  PrizetypeController: {
    '*': 'twitch',
    'find': true,
  },      

  ScopeController: {
    '*': 'twitch',
    'find': true,
  },

  SpinwheelController: {
    '*': 'twitch',
    'find': true,
  },  

  UserController: {
    '*': 'twitch',
  },  

  WinnerController: {
    '*': 'twitch',
  },    

};
