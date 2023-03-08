// Import dependencies
const Agenda = require("agenda")

// Create a new instance of Agenda
const agenda = new Agenda({ db: { address: 'mongodb://localhost/agenda-example' } });

// Define the job processing function
async function task() {
  console.log('Running recurring task.');
}

// Define the job name
const jobName = 'run task';

// Define the job schedule
const jobSchedule = 'every 30 seconds';

// Define the job options
const jobOptions = {
  priority: 'high',
  concurrency: 10,
};

// Define the job
const job = agenda.create(jobName).repeatEvery(jobSchedule, jobOptions);

// Define the job processing function
job.process(task);

// Start the Agenda scheduler
(async function() {
  await agenda.start();
  console.log('Agenda scheduler started.');
})();
