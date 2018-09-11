/**
 * Scope.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

	name: 'string',
	eventName: 'string',
	minTier: 'number',
	minMonths: 'number',
	maxMonths: 'number',
	minAmount: 'number',
	maxAmount: 'number'
};