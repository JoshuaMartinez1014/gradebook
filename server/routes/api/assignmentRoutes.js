const router = require('express').Router();
const { User, Grade, Class, Assignment } = require('../../models');
//const withAuth = require('../../utils/auth');


// GET all assignments
router.get("/", async (req, res) => {
    try {
        const assignmentData = await Assignment.find({})
        //include: Grade? Class?
        res.status(200).json(assignmentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get a single assignment
router.get("/:id", async (req, res) => {
    try {
        const assignmentData = await Assignment.findById(req.params.id).
            populate("grade").
            exec();
        //include: Grade? Class?
        res.status(200).json(assignmentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create an assignment
router.post('/', async (req, res) => {
    try {
        const newAssignment = await Assignment.create({ ...req.body });
        res.status(200).json(newAssignment);
    } catch (err) {
        res.status(400).json(err);
    }
});

// router.post('/:id', async (req, res) => {
//     try {
//         const newGrade = await Grade.create({
//             grade: req.body.grade,
//             student: req.body.student,
//             assignment: req.body.assignment
//         });
//         Assignment.findByIdAndUpdate(req.body.assignment, { $push: { grade: newGrade._id } })
//         res.status(200).json(newGrade);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// Update an assignment
router.put('/:id', async (req, res) => {
    try {
        const assignmentData = await Assignment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(assignmentData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete an assignment
router.delete('/:id', async (req, res) => {
    try {
        const assignmentData = await Assignment.findByIdAndDelete(req.params.id)

        res.status(200).json({ deleted: true });
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;