const express = require("express");
const router = express.Router();
const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const key = require("../keys");
const jwt = require("jsonwebtoken");

// router.get("/all", (req, res) => {
//   userModel
//     .find({})
//     .then((files) => {
//       res.send(files);
//     })
//     .catch((err) => console.log(err));
// });

/*post login route*/
router.post("/login", async (req, res) => {
  userModel.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({ message: "login failed, user not found" });
    }
    if (user) {
      bcrypt.compare(req.body.password, user.password, (err, data) => {
        if (err) throw err;
        if (data) {
          return res.status(200).json({ msg: "Login success" });
        } else {
          return res
            .status(401)
            .json({ msg: "login failed, invalid password" });
        }
      });
    }
  });
});

/*create account post route*/
router.post(
  "/create",
  [
    check("email").isEmail(),
    check("password").isLength({ min: 8 }),
    check("picture").isURL(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    bcrypt.hash(req.body.password, 10).then((hash) => {
      const newUser = new userModel({
        username: req.body.username,
        email: req.body.email,
        picture: req.body.picture,
        password: hash,
      });

      newUser
        .save()
        .then((response) => {
          res.status(201).json({
            message: "User successfully created!",
            result: response,
          });
        })
        .catch((error) => {
          res.status(500).json({
            error: error,
          });
        });
    });
  }
);

module.exports = router;
