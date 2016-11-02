define([
  'angular',
  
  'setup-apps/load-angular',
  'setup-apps/pages/<%= page %>/js/routes',
  'setup-apps/pages/<%= page %>/js/preview/<%= page %>-preview.controller',
  'setup-apps/pages/<%= page %>/js/edit/<%= page %>-edit.controller',
  'setup-apps/pages/<%= page %>/js/services/<%= page %>-services',
  
  'angular-resource',
  'angular-ui-router',
  'angular-ui-router-helper',
  
  'setup-apps/common/common.module',
  'setup-apps/common/components/grid/grid.module',
  'setup-apps/pages/<%= page %>/js/config'
], function(
  angular,
  
  loadAngular,
  routes,
  <%= classedPage %>PreviewCtrl,
  <%= classedPage %>EditCtrl
) {
  'use strict';
  
  var moduleName = 'html.setupApps.<%= cameledPage %>';
  
  angular.module(
    moduleName, [
      'ngResource',
      
      'ui.router',
      'ui.router.stateHelper',
      
      'html.setupApps.common',
      'html.setupApps.common.grid',

      'html.setupApps.<%= cameledPage %>.config',
      'html.setupApps.<%= cameledPage %>.services'
    ])
    .inheritController('<%= classedPage %>PreviewCtrl', 'krnBasePreviewController', <%= classedPage %>PreviewCtrl)
    .inheritController('<%= classedPage %>EditCtrl', 'krnBaseEditController', <%= classedPage %>EditCtrl)
    
    .config(routes);
  
  loadAngular(document.lastChild, moduleName);
});
