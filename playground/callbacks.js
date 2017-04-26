var getUser = (id, callback) => {

  var user = {
    id: id,
    name: 'John'
  };

  callback(user);

};

getUser(10, (user) => {
  console.log(user);
});
