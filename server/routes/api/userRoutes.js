
const router = require("express").Router();
const { User, Class } = require("../../models");
const jwt = require("jsonwebtoken");

console.log("user routes");

// Get all users
router.get("/", async (req, res) => {
  try {
    const userData = await User.find({});
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single user
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findById(req.params.id);
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ err, message: "get /user:id route" });
  }
});

// Create a new user
router.post("/signup", async (req, res) => {
  try {
    console.log(req.body.role);
    console.log("===========");
    const userData = await User.create({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      password: req.body.password,
      isTeacher: req.body.isTeacher,
    });
    const { password, ...modifiedUser } = userData;

    const token = jwt.sign(
      {
        email: userData.email,
        id: userData._id,
        fname: userData.fname,
        lname: userData.lname,
      },
      process.env.JWT_SECRET
    );

    res
      .cookie("auth-cookie", token)
      .status(200)
      .json({ status: "success", payload: modifiedUser });
  } catch (err) {
    console.log(err);
    res.status(400).json({ err, message: "post /signup route" });
  }
});

// Update a user
router.put("/:id", async (req, res) => {
  try {
    const userData = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    const { password, ...modifiedUser } = userData;
    res.status(200).json({ status: "success", payload: modifiedUser });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a user
router.delete("/:id", async (req, res) => {
  try {
    const userData = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ deleted: true });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    console.log("🔑 Incoming login request");
    console.log("Request body:", req.body);

    const userData = await User.findOne({ email: req.body.email });
    console.log("User found:", userData);

    if (!userData) {
      console.log("❌ No user found");
      return res.status(400).json({ message: "User not found" });
    }

    const validPassword = await userData.verify(req.body.password);
    console.log("Password valid:", validPassword);

    if (!validPassword) {
      console.log("❌ Invalid password");
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      {
        email: userData.email,
        id: userData._id,
        fname: userData.fname,
        lname: userData.lname,
      },
      process.env.JWT_SECRET
    );

    const { password, ...modifiedUser } = userData.toObject();

    console.log("✅ Login success");
    res
      .cookie("auth-cookie", token)
      .json({ status: "success login", payload: modifiedUser });
  } catch (err) {
    console.log("🔥 Login error caught:", err);
    res.status(400).json({ message: "Login failed", error: err.message });
  }
});


router.post("/verify", async (req, res) => {
  console.log("verify user");
  const cookie = req.cookies["auth-cookie"];
  if (!cookie) return res.status(401).json({ msg: "un-authorized" });

  console.log(cookie);

  const isVerified = jwt.verify(cookie, process.env.JWT_SECRET);
  if (!isVerified) return res.status(401).json({ msg: "un-authorized" });

  console.log(isVerified);

  const user = await User.findOne({ _id: isVerified.id }).select("-password");
  if (!user) return res.status(401).json({ msg: "authorized" });

  console.log(user);
  return res.status(200).json({ status: "success", payload: user });
});

// destroys the session (Logout)
router.post("/logout", (req, res) => {});

module.exports = router;
