import { agenda } from "./Config/db";

// Create a job:
agenda.define('log hello medium', async job => {
    const { name } = job.attrs;

    console.log(`Hello ${name} 👋`);

    /**
     * Replace the dummy log and write your code here
     */
});

// Schedule a job:
(async function() {
    await agenda.start(); // Start Agenda instance

    await agenda.schedule('in 1 minutes', 'log hello medium', {name: 'Medium'}); // Run the dummy job in 10 minutes and passing data.
})();

// Recurring job:
agenda.define('happy new year', async job => {
    const year = new Date().getFullYear();
    console.log(`Happy new year ${year} 🎉`);

    /**
     * Replace the dummy log and write your code here
     */
});

(async function() {
    await agenda.start(); // Start Agenda instance

    await agenda.every('0 0 1 1 *', 'happy new year');
})();