var angular = angular || undefined;

angular.module('app', ['ionic'])

.controller('appCtrl', function($scope, $timeout) {

 $scope.objeto1 = {};
 $scope.objeto  = {};

  $scope.forms = {
         allValid: function () {
             var formValidCount = 1;
             angular.forEach(this, function (obj) {
                 if (obj.$valid) {
                     formValidCount++;
                 }
             });
             return (Object.keys(this).length === formValidCount);
         }
     };

     $scope.setForm = function (form, id) {
         var formObj = {};
         $scope.$applyAsync(function () {
             formObj[id] = form;
             $scope.forms[id] = formObj[id][id];
         });
     };

     $scope.validaForm = function(form) {
		if($scope.forms[form]){
			return $scope.forms[form].$valid;
		}
	};
})

.component('collapseContainer', {
  templateUrl: 'collapse.view.html',
  transclude: true,
  bindings: {
    title: '<',
    leftHeaderIdentifier: '<',
    headerIcon: '<',
    isOpen: '=',
    leftHeaderCss: '<',
    headerCss: '<',
    preventDoubleClick: '<',
    isValid: '<'

  },
  controller: function($timeout) {

    var _self = this,
      _wasClicked,
      _preventDoubleClick = function() {
        if (_self.preventDoubleClick) {
          _wasClicked = true;
          $timeout(function() {
            _wasClicked = false;
          }, 1500);
        }
      };

    this.$onInit = function() {
      this.showHideFlag = this.isOpen;
    };

    this.showHide = function() {
      if (!_wasClicked)
        this.showHideFlag = !this.showHideFlag;
      _preventDoubleClick();
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