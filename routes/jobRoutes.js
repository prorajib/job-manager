import express from 'express';
const router = express.Router();
import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
} from '../controllers/jobsController.js';

router.route('/').post(createJob).get(getAllJobs);
router.route('/:id').delete(deleteJob).patch(updateJob);
router.route('/stats').get(showStats);

export default router;
