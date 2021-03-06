//  Our users routes
const bcrypt = require("bcrypt");
let isAuthenticated = false;
console.log("In users");

const router = require("express").Router();
let User = require("../schema/users.schema");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const password = bcrypt.hashSync(req.body.password, 5);
  const newUser = new User({ username, password });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/login").post((req, res) => {
  User.findOne({username: req.body.username}, (error, data) => {
    if (error) {
      res.send ({message: error});
    } else {
      if (data == null) {
        res.send({message: "No users found"});
      } else {
        if (bcrypt.compareSync(req.body.password, data.password)) {
          isAuthenticate = true;
          res.send({message: "Password Accepted"})
        } else {
          res.send ({message: "Incorrect Password Supplied"})
        }
      }
    }
  })
});

module.exports = router;
