define([
  'angular',
  './<%= page %>-edit.service',
  'setup-apps/pages/<%= page %>/js/resources/<%= page %>.resource'
], function(
  angular,
  <%= cameledPage %>ApiService
) {
  'use strict';
  
  angular
    .module('html.setupApps.<%= cameledPage %>.services', [
      'html.infrastructure.CommonServices'
    ])
    .service('currentPageApiService', <%= cameledPage %>ApiService);
});
