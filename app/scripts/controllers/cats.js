app.controller('CatCtrl',  function ($scope, Cat) {
  
  $scope.cats = Cat.all;

  $scope.newCat = {'pic':'','name':'', 'age':'', 'description': ''};

   $scope.submitCat = function () {
      Cat
      .create($scope.newCat)
      .then(function (ref) {
            $scope
            .newCat = {'pic':'','name': '', 'age': '', 'description': ''};
      });
    };

  $scope.deleteCat = function (Id) {
     Cat
     .delete(Id);
  };

});