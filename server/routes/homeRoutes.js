const router = require("express").Router();
const { User, Grade, Class } = require("../models");
//const withAuth = require('../utils/auth');

// GET route for homepage
/* router.get('/', async (req, res) => {
  try {
    res.render('HomePage', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
}); */

// GET route for a dashboard
router.get("/dashboard", async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      // include: [{ model: Post }]
    });

    const user = userData.get({ plain: true });

    res.render("dashboard", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/grade", async (req, res) => {
  try {
    res.render("GradePage");
  } catch {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to their dashboard
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("LoginPage");
});

module.exports = router;
