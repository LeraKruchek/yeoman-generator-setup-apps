define(
  [
    'angular',
    'setup-apps/common/global.config'
  ], function(angular, config) {
    'use strict';
    
    function componentsSettingsFactory() {
      return {
        getSettings: function(serverPreferences) {
          var componentSettings = {};
          
          return config.createConfig(componentSettings, serverPreferences);
        }
      };
    }
    
    return componentsSettingsFactory;
  }
);
