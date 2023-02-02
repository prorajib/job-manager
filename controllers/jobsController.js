const createJob = async (req, res) => {
  res.send('job created');
};

const getAllJobs = async (req, res) => {
  res.send('get all the jobs');
};
const deleteJob = async (req, res) => {
  res.send('delete job');
};

const updateJob = async (req, res) => {
  res.send('Update job');
};
const showStats = async (req, res) => {
  res.send('Show stats');
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
