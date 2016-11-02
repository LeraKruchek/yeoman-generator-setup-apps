define([], function() {
  
  <%= classedPage %>EditCtrl.$inject = ['$scope'];
  
  function <%= classedPage %>EditCtrl($scope) {
    
    function save() {}
    
    this.populateForm = function() {};
  }
  
  return <%= classedPage %>EditCtrl;
});
