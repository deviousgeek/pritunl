define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  'use strict';
  var LinkHostModel = Backbone.Model.extend({
    defaults: {
      'id': null,
      'link_id': null,
      'location_id': null,
      'name': null,
      'timeout': null,
      'priority': null,
      'public_address': null,
      'version': null
    },
    url: function() {
      var url = '/link/' + this.get('link_id') + '/location/' +
        this.get('location_id') + '/host';

      if (this.get('id')) {
        url += '/' + this.get('id');
      }

      return url;
    }
  });

  return LinkHostModel;
});
