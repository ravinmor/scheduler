// import express from "express";
// import { routes } from "./src/routes/api.js";

import * as cron from 'node-cron';
import timeService from './src/services/timeService.js';

(async () => {
    const isoDateString = "2023-07-18T01:27:55Z";
    const parsedDate = await timeService.parseISODate(isoDateString);

    cron.schedule(`${parsedDate.second} ${parsedDate.minute} ${parsedDate.hour} ${parsedDate.day_of_the_month} ${parsedDate.month} ${parsedDate.day_of_the_week} ${parsedDate.year}`, () => {
        const date = new Date().toISOString().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"})
        console.log(`> Running a task: ${date.replace('T', ' ')}`);
    });
})();