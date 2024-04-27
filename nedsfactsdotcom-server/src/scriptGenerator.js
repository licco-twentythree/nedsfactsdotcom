import OpenAI from "openai";
import { config } from "dotenv";
import fs from "fs";

config()

const openai = new OpenAI({apiKey: process.env.API_KEY});

class ScriptGenerator {
    
    static async generateText(prompt){
        return new Promise(async (resolve, reject) => {
            try {
                const completion = await openai.chat.completions.create({
                    messages: [{role: "system", content: prompt}],
                    model: 'gpt-4'
                });
                resolve(completion.choices[0].message.content);
            } catch (error){
                reject(error);
            }
        })
    }
}

export {ScriptGenerator};