define([
  'angular',
  'setup-apps/common/api-helper',
  'angular-resource'
], function(angular, apiHelper) {
  'use strict';
  
  <%= cameledPage %>ResourceService.$inject = [
    '$resource',
    '$token',
    'apiUrls',
    'krnServerPreferences'
  ];
  
  function <%= cameledPage %>ResourceService($resource, $token, apiUrls, krnServerPreferences) {
        
    return {
      create: function(data, id) {
        
        return new($resource(apiUrls.urls.base, {
          id: id,
          token: $token
        }, {
          query: {
            method: 'GET',
            isArray: false
          },
          get: {
            method: 'GET',
            url: apiUrls.urls.get
          },
          create: {
            method: 'GET',
            url: apiUrls.urls.create
          },
          update: {
            method: 'PUT',
            url: apiUrls.urls.update,
            unique: true
          },
          save: {
            method: 'POST',
            url: apiUrls.urls.new,
            unique: true
          },
          delete: {
            method: 'DELETE',
            unique: true,
            url: apiUrls.urls.delete
          }
        }))(data);
      }
    };
  }
  
  return <%= cameledPage %>ResourceService;
});
