//  Our users routes
const bcrypt = require("bcrypt");

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
  const password = req.body.password;
  let myTestPass = bcrypt.hashSync(password, 10);
  console.log(myTestPass);
  const newUser = new User({ username, password });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// const myPassword = (password) => {
//   console.log("In My Password)");
//   console.log(password);
//   let myTest = await bcrypt.hash(password, 1);
//   console.log(myTest);
//   return myTest;
// };

module.exports = router;
