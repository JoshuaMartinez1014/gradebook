const router = require('express').Router();
const { User, Grade, Class, Assignment } = require('../../models');
//const withAuth = require('../../utils/auth');


// GET all classes
router.get("/", async (req, res) => {
    try {
        const classData = await Class.find({})
        //include: Assignment? Grade?
        res.status(200).json(classData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/user/:id", async (req, res) => {
    console.log("test")
    try {
        const classData = await Class.find({ students: req.params.id }).
            populate({
                path: 'assignment',
                populate: {
                    path: 'grade',
                    match: { student: req.params.id }
                }
            }).
            exec();
        //include: Assignment? Class?
        res.status(200).json(classData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get a single class
router.get("/:id", async (req, res) => {
    try {
        const classData = await Class.findById(req.params.id)
        //include: Assignment? Grade?
        res.status(200).json(classData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a class
router.post('/', async (req, res) => {
    try {
        const newClass = await Class.create({ ...req.body });
        res.status(200).json(newClass);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update a class
router.put('/:id', async (req, res) => {
    try {
        const classData = await Class.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(classData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete a class
router.delete('/:id', async (req, res) => {
    try {
        const classData = await Class.findByIdAndDelete(req.params.id)

        res.status(200).json({ deleted: true });
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;