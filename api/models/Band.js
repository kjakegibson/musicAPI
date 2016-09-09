/**
 * Band.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	bandName: {
  		type: 'string',
  		required: true
  	},
  	genre: {
  		type: 'string',
  		required: true
  	},
  	subGenre: {
  		type: 'string',
  		defaultsTo: 'No Sub-Genre Added'
  	},
  	countryOfOrigin: {
  		type: 'string',
  		defaultsTo: 'No Country of Origin Added'
  	},
  	yearFormed: {
  		type: 'string',
  		defaultsTo: 'Year Formed Unknown'
  	},
  	lyricalThemes: {
  		type: 'text',
  		defaultsTo: 'No Lyrical Themes Added'
  	},
  	active: {
  		type: 'string',
  		enum: [1,0],
  		required: true
  	}



  }
};

