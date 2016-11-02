define([
  'angular',
  'setup-apps/common/api-helper',
  './components-settings'
], function(angular, apiHelper, componentsSettings) {
  'use strict';
  
  var apiUrls = {
    map: {
      'action.new': 'new',
      'action.view': 'get',
      'action.edit': 'update',
      'action.delete': 'delete',
      'action.create': 'create'
    },
    urls: {
      base: apiHelper.getApiUrl('/<%= urledPage %>'),
      get: apiHelper.getApiUrl('/<%= urledPage %>/:id'),
      create: apiHelper.getApiUrl('/<%= urledPage %>/create')
    }
  };
  
  var localConfig = {
    urls: {
      PREVIEW: '/<%= page %>',
      EDIT: '/<%= page %>/:mode/:id?'
    }
  };
  
  angular.module('html.setupApps.<%= cameledPage %>.config', ['html.infrastructure.CommonServices'])
    .factory('componentSettingsFactory', componentsSettings)
    .constant('$serverPath', window.SERVER_URL)
    .constant('config', localConfig)
    
    .value('apiUrls', apiUrls);
  
  return localConfig;
});
