var mongoskin = require('mongoskin');
var async = require('async');
var _ = require('underscore');

var collections = [
  { name: 'users', indexes: [ { keys: { user_id: 1 } } ]  },
  { name: 'words', indexes: [ { keys: { user_id: 1, name : 1 } } ] }
];

module.exports = {
  dropCollections: function(){
    var db = mongoskin.db(url, { w: 1});
  }
};