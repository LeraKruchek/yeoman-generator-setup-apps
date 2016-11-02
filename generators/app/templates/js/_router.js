define(
  [
    'angular',
    
    'text!setup-apps/pages/<%= page %>/js/preview/<%= page %>-preview.html',
    'text!setup-apps/pages/<%= page %>/js/edit/<%= page %>-edit.html'
  ], function(
    angular,
    <%= cameledPage %>Preview,
    <%= cameledPage %>Edit
  ) {
    routes.$inject = [
      'config',
      '$urlRouterProvider',
      'stateHelperProvider'
    ];
    
    function routes(config, $urlRouterProvider, stateHelperProvider) {
      
      stateHelperProvider
        .state({
          name: 'preview',
          url: config.urls.PREVIEW,
          template: <%= cameledPage %>Preview,
          controller: '<%= classedPage %>PreviewCtrl as <%= cameledPage %>PreviewCtrl'
        })
        .state({
          name: 'edit',
          url: config.urls.EDIT,
          template: <%= cameledPage %>Edit,
          controller: '<%= classedPage %>EditCtrl as <%= cameledPage %>EditCtrl'
        });
      
      $urlRouterProvider.otherwise(config.urls.PREVIEW);
    }
    
    return routes;
  }
);
