import express from 'express';
import { config } from "dotenv";
import { ScriptGenerator } from './scriptGenerator.js';
config()

const app = express();
const port = process.env.PORT;


app.get('/fact/:topic', async (req, res) => {
    res.send(await ScriptGenerator.generateText(`Generate a fact for this topic: ${req.params.topic}. Return this as a JSON object with two keys: summary (which is a summary of the fact) and description (which is the entire fact)`));
});

app.listen(port, () =>{
    console.log(`nedfactsdotcom-server now listening on port ${port}!`)
});