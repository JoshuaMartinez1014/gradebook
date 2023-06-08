const router = require("express").Router();
const userRoutes = require("./userRoutes");
const gradeRoutes = require("./gradeRoutes");
const classRoutes = require("./classRoutes");
const assignmentRoutes = require("./assignmentRoutes");

router.use("/user", userRoutes);
router.use("/grade", gradeRoutes);
router.use("/class", classRoutes);
router.use("/assignment", assignmentRoutes);

module.exports = router;
