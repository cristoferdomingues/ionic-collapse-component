var angular = angular || undefined;

angular.module('app', ['ionic'])

.component('collapseContainer', {
  templateUrl: 'collapse.view.html',
  transclude:true,
  bindings: { 
    title: '=',
    leftHeaderIdentifier:'='
  },
  controller: function() {

    this.$onInit = function() {
      this.showHideFlag = false;
    };

    this.showHide = function() {
      console.log('showHide');
      this.showHideFlag = !this.showHideFlag;
      console.log( this.showHideFlag);
    };
  }
})

.component('collapseBody', {
  template: '<div ng-transclude></div>',
   transclude:true,
   require: {
      parent: '^collapseContainer'
    },
  controller: function() {
  }
});