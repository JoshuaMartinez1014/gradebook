const router = require('express').Router();
const { User, Grade, Class, Assignment, Submited } = require('../../models');
//const withAuth = require('../../utils/auth');


// GET all Submiteds
router.get("/", async (req, res) => {
    try {
        const submitedData = await Submited.find({})
        //include: Assignment? Class?
        res.status(200).json(submitedData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get a single Submited
router.get("/:id", async (req, res) => {
    try {
        const submitedData = await Submited.findById(req.params.id)
        //include: Assignment? Class?
        res.status(200).json(submitedData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a Submited
router.post('/', async (req, res) => {
    try {
        console.log("hit")
        const newSubmited = await Submited.create({ ...req.body });
        res.status(200).json({ status: "success", payload: newSubmited });
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update a Submited
router.put('/:id', async (req, res) => {
    try {
        const submitedData = await Submited.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(submitedData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete a Submited
router.delete('/:id', async (req, res) => {
    try {
        const submitedData = await Submited.findByIdAndDelete(req.params.id)

        res.status(200).json({ deleted: true });
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;