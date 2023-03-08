import { agenda } from "./Config/db";

// Create a job:
agenda.define('log hello medium', async job => {
    const { name } = job.attrs;

    console.log(`Hello ${name} 👋`);

    /**
     * Replace the dummy log and write your code here
     */
});

// Schedule a job: Once we have jobs, we can run them. In this part, we will schedule the job to run in 10 minutes as follow
(async function() {
    await agenda.start(); // Start Agenda instance

    await agenda.schedule('in 1 minutes', 'log hello medium', {name: 'Medium'}); // Run the dummy job in 10 minutes and passing data.
})();

// Recurring job: Agenda allows us to run recurring jobs. For example every year. We will create a dummy job to wish a happy new year
agenda.define('happy new year', async job => {
    const year = new Date().getMinutes;
    console.log(`Happy new year ${year} 🎉`);

    /**
     * Replace the dummy log and write your code here
     */
});

(async function() {
    await agenda.start(); // Start Agenda instance

    await agenda.every('1 1 0 0 *', 'happy new year');
})();

// Agenda helps you to plan jobs, run them later or repeatedly. You can find more information and features here.