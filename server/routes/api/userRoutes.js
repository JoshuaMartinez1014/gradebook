// const router = require("express").Router();
// const { User } = require("../../models");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// console.log("user routes");

// // Get all users
// router.get("/", async (req, res) => {
//   try {
//     const userData = await User.find({});
//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Get a single user
// router.get("/:id", async (req, res) => {
//   try {
//     const userData = await User.findById(req.params.id);
//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(500).json({ err, message: "get /user:id route" });
//   }
// });
// // 
// // Create a new user
// router.post("/signup", async (req, res) => {
//   try {
//     const userData = await User.create(req.body);
//     const { password, ...modifiedUser } = userData;

//     const token = jwt.sign(
//       {
//         email: userData.email,
//         id: userData._id,
//         fname: userData.fname,
//         lname: userData.lname,
//       },
//       process.env.JWT_SECRET
//     );

//     res
//       .cookie("auth-cookie", token)
//       .status(200)
//       .json({ status: "success", payload: modifiedUser });
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({ err, message: "post /signup route" });
//   }
// });

// // Update a user
// router.put("/:id", async (req, res) => {
//   try {
//     const userData = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// // Delete a user
// router.delete("/:id", async (req, res) => {
//   try {
//     const userData = await User.findByIdAndDelete(req.params.id);
//     res.status(200).json({ deleted: true });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// // Login
// router.post("/login", async (req, res) => {
//   try {
//     const userData = await User.findOne({ email: req.body.email });
//     console.log(req.body.email);
//     console.log(userData);
//     if (!userData) {
//       res.status(400).json({ message: "Couldnt find user" });
//       return;
//     }

//     const validPassword = await userData.verify(req.body.password);

//     console.log(validPassword);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: "Incorrect username or password, please try again" });
//       return;
//     }

//     const token = jwt.sign(
//       {
//         email: userData.email,
//         id: userData._id,
//         fname: userData.fname,
//         lname: userData.lname,
//       },
//       process.env.JWT_SECRET
//     );

//     const { password, ...modifiedUser } = userData;

//     res
//       .cookie("auth-cookie", token)
//       .json({ status: "success login", payload: modifiedUser });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.post("/verify", async (req, res) => {
//   console.log("verify user");
//   const cookie = req.cookies["auth-cookie"];
//   if (!cookie) return res.status(401).json({ msg: "un-authorized" });

//   console.log(cookie);

//   const isVerified = jwt.verify(cookie, process.env.JWT_SECRET);
//   if (!isVerified) return res.status(401).json({ msg: "un-authorized" });

//   console.log(isVerified);

//   const user = await User.findOne({ _id: isVerified.id }).select("-password");
//   if (!user) return res.status(401).json({ msg: "authorized" });

//   console.log(user);
//   return res.status(200).json({ status: "success", payload: user });
// });

// // destroys the session (Logout)
// router.post("/logout", (req, res) => {});

// module.exports = router;

const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser)
// .put(authMiddleware, saveBook);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);



module.exports = router;

