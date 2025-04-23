const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { checkRole } = require('../middleware/roleCheck');
const {
  applyForInternship,
  getMyApplications
} = require('../controllers/applicationController');

router.post('/', protect, checkRole('student'), applyForInternship);
router.get('/my-applications', protect, getMyApplications);

module.exports = router;
