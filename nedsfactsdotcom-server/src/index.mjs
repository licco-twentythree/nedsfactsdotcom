import express from 'express';
import { config } from "dotenv";
import { ScriptGenerator } from './scriptGenerator.js';
import cors from 'cors';
config()

const app = express();
const port = process.env.PORT;

app.use(cors())

app.get('/fact/:topic', async (req, res) => {
    res.send(await ScriptGenerator.generateText(`Generate a random interesting fact from this topic: ${req.params.topic}. Return this as a JSON object with two keys: summary (which is a summary of the fact) and description (which is the entire fact)`));
});

app.listen(port, () =>{
    console.log(`nedfactsdotcom-server now listening on port ${port}!`)
});