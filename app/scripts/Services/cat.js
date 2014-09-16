'use strict';

app.factory('Cat',
  function ($firebase, FIREBASE_URL, User) {
    var ref = new Firebase(FIREBASE_URL + 'cats');

    var cats = $firebase(ref);

    var Cat = {
      all: cats,
      create: function (cat) {
        if (User.signedIn()) {
          var user = User.getCurrent();

          cat.owner = user.username;
    

          return cats.$add(cat).then(function (ref) {
            var catId = ref.name();

            user.$child('cats').$child(catId).$set(catId);

            return catId;
          });
        }
      },
      find: function (catId) {
        return cats.$child(moodId);
      },
      delete: function (catId) {
        if (User.signedIn()) {
          var cat = Cat.find(catId);

          cat.$on('loaded', function () {
            var user = User.findByUsername(cat.owner);

            cats.$remove(catId).then(function () {
              user.$child('cats').$remove(catId);
            });
          });
        }
      }
    };

    return Cat;
  });