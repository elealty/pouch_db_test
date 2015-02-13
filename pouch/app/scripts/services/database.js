'use strict';

/**
 * @ngdoc service
 * @name pouchApp.database
 * @description
 * # database
 * Factory in the pouchApp.
 */
angular.module('pouchApp')
  .factory('database',  function () {
        var db = new PouchDB('ele_db');
        return {
            add: function (obj) {
                console.log("add:"+JSON.stringify(obj));
                db.put(obj).then(function (r) {
                        console.log("salvato");
                        return r;
                 }).catch(function(error) {
                     console.log("ERROR:"+error);
                 });
            },
            put: function (obj, id) {
                console.log("put:"+JSON.stringify(obj));
                db.put(obj, id).then(function (r) {
                        console.log("salvato");
                        return r;
                 }).catch(function(error) {
                     console.log("ERROR:"+error);
                 })
                 ;
            },
            get: function (id) {
                db.get(id)
                    .then(function (r) {
                        console.log(r, 'Result from get');
                        return r;
                    });
            },
            query: function (map) {
                console.log("query")
                db.query({map: map}, {include_docs: true})
                    .then(function (r) {
                        return r;
                   }).catch(function(error) {
                     console.log("ERROR query:"+error);
                 });
            },
            all: function (startKey, endKey, desc) {
                db.allDocs({startkey: startKey, endkey: endKey, descending: desc})
                    .then(function (r) {
                        console.log(r, 'Results from allDocs');
                        return r;
                    }).catch(function(error) {
                     console.log("ERROR all:"+error);
                 });
            }
        };
    }
);
