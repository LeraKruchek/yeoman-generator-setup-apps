'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp')
var path = require('path');
var _ = require('underscore.string');

var SetupAppsGenerator = yeoman.Base.extend({
  prompting: function() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the great ' + chalk.red('generator-setup-apps') + ' generator!'
    ));
    
    var kebabRegex = /^[a-z]*(-[a-z]*)*$/;
    
    var prompts = [{
      type: 'input',
      name: 'pageName',
      message: 'Your page name (kebab-case)',
      validate: function(input) {
        return kebabRegex.test(input) ||
               'Please enter page name in kebab case (lowercase separated with -)';
      },
    }];
    
    return this.prompt(prompts).then(function(props) {
      // To access props later use this.props.pageName;
      this.props = props;
    }.bind(this));
  },
  
  writing: function() {
    this.page = this.props.pageName;
    this.cameledPage = _.camelize(this.page);
    this.classedPage = _.classify(this.page);
    this.urledPage = this.page.replace('-', '');
    
    this.context = {
      page: this.page,
      classedPage: this.classedPage,
      cameledPage: this.cameledPage,
      urledPage: this.urledPage
    };
    
    var previewPath = this.page + '/js/preview/';
    var editPath = this.page + '/js/edit/';
    var fileList = [{
      source: 'js/_preview.controller.js',
      dest: previewPath + this.page + '-preview.controller.js'
    }, {
      source: 'html/_preview.html',
      dest: previewPath + this.page + '-preview.html'
    }, {
      source: 'js/_edit.controller.js',
      dest: editPath + this.page + '-edit.controller.js'
    }, {
      source: 'js/resources/_.resource.js',
      dest: this.page + '/js/resources/' + this.page + '.resource.js'
    }, {
      source: 'js/services/_services.js',
      dest: this.page + '/js/services/' + this.page + '-services.js'
    }];
    
    var common = ['js/_app.js', 'js/_router.js', 'js/_config.js'];
  
    mkdirp.sync(this.page);
    
    common.forEach(function(source) {
      this.template(source, this.page + '/' + source.replace('_', ''), this.context);
    }, this);
    
    fileList.forEach(function(item) {
      this.template(item.source, item.dest, this.context);
    }, this)
    
    this.copy('html/_edit.html', editPath + this.page + '-edit.html');
    this.copy('js/_components-settings.js', this.page + '/js/components-settings.js');
  }
});

module.exports = SetupAppsGenerator;
