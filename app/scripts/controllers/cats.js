app.controller('CatCtrl', function ($scope, $location, Cat) {
  $scope.cats = Cat.all;

  $scope.newCat = {note: '', 'title': ''};

   $scope.submitCat = function () {
      console.log($scope.newCat);
      Cat.create($scope.newCat).then(function (ref) {

        $scope.newCat = {note: '', title: '', date: ''};
      });
    };

  $scope.deleteCat = function (catId) {
     Cat.delete(catId);
  };

});