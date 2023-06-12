const router = require('express').Router();
const { User, Grade, Class, Assignment } = require('../../models');
//const withAuth = require('../../utils/auth');


// GET all grades
router.get("/", async (req, res) => {
    try {
        const gradeData = await Grade.find({})
        //include: Assignment? Class?
        res.status(200).json(gradeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get a single grade
router.get("/:id", async (req, res) => {
    try {
        const gradeData = await Grade.findById(req.params.id)
        //include: Assignment? Class?
        res.status(200).json(gradeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a grade
// router.post('/', async (req, res) => {
//     try {
//         const newGrade = await Grade.create({ ...req.body });
//         res.status(200).json(newGrade);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

router.post('/', async (req, res) => {
    try {
        const newGrade = await Grade.create({
            grade: req.body.grade,
            student: req.body.student,
            assignment: req.body.assignment
        });
        Assignment.findByIdAndUpdate(req.body.assignment, { $push: { grade: newGrade._id } })
        res.status(200).json(newGrade);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update a grade
router.put('/:id', async (req, res) => {
    try {
        const gradeData = await Grade.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(gradeData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete a grade
router.delete('/:id', async (req, res) => {
    try {
        const gradeData = await Grade.findByIdAndDelete(req.params.id)

        res.status(200).json({ deleted: true });
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;