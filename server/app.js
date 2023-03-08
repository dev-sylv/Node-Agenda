import { agenda } from "./Config/db";


agenda.define('log hello medium', async job => {
    const { name } = job.attrs;

    console.log(`Hello ${name} 👋`);

    /**
     * Replace the dummy log and write your code here
     */
});