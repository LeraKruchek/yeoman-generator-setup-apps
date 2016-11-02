define(['angular'], function(angular) {
  
  <%= classedPage %>PreviewCtrl.$inject = ['$rootScope', '$state'];
  
  function <%= classedPage %>PreviewCtrl($rootScope, $state) {
    this.goToEdit = function() {
      $state.go('edit')
    };
  }
  
  return <%= classedPage %>PreviewCtrl;
});
