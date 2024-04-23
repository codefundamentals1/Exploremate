// index.js

import { generatePrediction } from './app.mjs';
// Define the function to extract text from prediction
function extractTextFromPrediction(prediction) {
    return prediction.generations[0].text;
}

(async () => {
    // Pass arguments to the generatePrediction function
    const prediction = await generatePrediction("Give complete iterinary for travelling to goa", 1000);

    // Use the function to extract text from the prediction
    const extractedText = extractTextFromPrediction(prediction);
    
    console.log(extractedText);
})();
