const express = require("express");
const router = express.Router();

const {
  updateUser,
  getPlan,
  getName,updateStatus,
  assignPlan,
  addToUserHistory,
  setDailyChallenge,
  getDailyChallenge
} = require("../controllers/userController");


router.get("/dailyChallenge", getDailyChallenge);
router.put("/update-user", updateUser);
router.post("/plan", getPlan);
router.post("/getName",getName);
router.put("/workoutStatus",updateStatus);
router.post("/assignPlan",assignPlan);
router.put("/addhistory",addToUserHistory);




module.exports = router;
