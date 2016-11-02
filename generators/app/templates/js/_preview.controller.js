define(['angular'], function(angular) {
  
  <%= classedPage %>PreviewCtrl.$inject = ['$rootScope'];
  
  function <%= classedPage %>PreviewCtrl($rootScope) {
    $rootScope.messageContainer.customMessageObjectFromResponseHandler = angular.noop;
  }
  
  return <%= classedPage %>PreviewCtrl;
});
