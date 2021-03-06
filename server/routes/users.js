const express = require("express");
const router = express.Router();
const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const key = require("../keys");
const jwt = require("jsonwebtoken");
const passport = require("../passport");

/*LOGIN*/
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
          const payload = {
            id: user.id,
            username: user.username,
            picture: user.picture,
            email: user.email,
            password: user.password,
          };
          const options = { expiresIn: 2592000 };
          jwt.sign(payload, key.secretOrKey, options, (err, token) => {
            if (err) {
              res.json({
                success: false,
                token: "There was an error",
              });
            } else {
              res.json({
                success: true,
                token: token,
              });
            }
          });
        } else {
          return res
            .status(401)
            .json({ msg: "login failed, invalid password" });
        }
      });
    }
  });
});

/*get login auth route*/
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    userModel
      .findOne({ id: req.user.id })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => res.status(404).json({ error: "User does not exist!" }));
  }
);

/*CREATE ACCOUNT*/
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

/*UPDATE USER DETAILS*/
/*username put route*/
router.put("/username", async (req, res) => {
  userModel.findOneAndUpdate(
    { username: req.body.username },
    { username: req.body.newusername },
    { new: true },
    (err, user) => {
      if (err) {
        console.log("There was an error updating username.");
      }
      console.log(user);
    }
  );
});

/*email put route*/
router.put("/email", async (req, res) => {
  userModel.findOneAndUpdate(
    { email: req.body.email },
    { email: req.body.newemail },
    { new: true },
    (err, user) => {
      if (err) {
        console.log("There was an error updating email.");
      }
      console.log(user);
    }
  );
});

/*picture put route*/
router.put("/picture", async (req, res) => {
  userModel.findOneAndUpdate(
    { picture: req.body.picture },
    { picture: req.body.newpicture },
    { new: true },
    (err, user) => {
      if (err) {
        console.log("There was an error updating picture.");
      }
      console.log(user);
    }
  );
});

/*password put route*/

module.exports = router;
