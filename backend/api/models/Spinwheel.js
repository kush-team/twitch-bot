/**
 * Spinwheel.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: 'string',

    channel: {
        model: 'channel'
    },

    prizes: {
        collection: 'prize'
    }

  },

};

