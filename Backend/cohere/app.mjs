import { CohereClient } from "cohere-ai";
import { cp } from "fs";

const cohere = new CohereClient({
    token: "XVwjBdvraLMu3uCWPLO74u6qXgIzYWSE00dgdfYW",
});

// Define the async function to generate prediction
async function generatePrediction(prompt, maxTokens) {
    const prediction = await cohere.generate({
        prompt,
        maxTokens,
    });
    
    return prediction;
}



export { generatePrediction };
