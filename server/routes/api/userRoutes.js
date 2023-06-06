const router = require('express').Router();
const { User } = require('../../models');

// Get all users
router.get("/", async (req, res) => {
  try {
    const userData = await User.find({})
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
})

// Get a single user
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findById(req.params.id)
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
})

// Create a new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
    });

    res.status(200).json(userData);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

// Update a user
router.put('/:id', async (req, res) => {
  try {
    const userData = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(userData);
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
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { name: req.body.name } });
    
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const realUser = userData.get({ plain: true })
    console.log(realUser)
    console.log(req.body.password)

    const validPassword = await userData.checkPassword(req.body.password);

    console.log(validPassword)

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// destroys the session (Logout)
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});



module.exports = router;