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
          var Id = ref.name();

          cat.owner = user.username;
          return cats
          .$add(cat)
          .then(function (ref) {
              user
              .$child('cats')
              .$child(Id)
              .$set(Id);

            return Id;
          });
        }
      },
    };

    return Cat;
  });