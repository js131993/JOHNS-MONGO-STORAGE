const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const reactionRoutes = require("./reactionRoutes");
const userRoutes = require("./userRoutes");

router.use('/thought', thoughtRoutes);
router.use("/reaction", reactionRoutes);
router.use("/user", userRoutesRoutes);

module.exports = router;
