import express from 'express'
import bodyParser  from 'body-parser';


import {generatePrediction} from "./cohere/app.mjs"
// import Mainpage from '../Frontend/src/components/MainPage/Mainpage';

///////////////////////////////////////////



 const app = express();
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

 app.get('/' ,( req , res) =>{
    res.send('sever is ready')
 });


 app.get('/api' ,( req , res) =>{
   const cities = [
      { "id": 1, "cityname": "Mumbai" },
      { "id": 2, "cityname": "Delhi" },
      { "id": 3, "cityname": "Bangalore" },
      { "id": 4, "cityname": "Hyderabad" },
      { "id": 5, "cityname": "Chennai" },
      { "id": 6, "cityname": "Kolkata" },
      { "id": 7, "cityname": "Ahmedabad" },
      { "id": 8, "cityname": "Pune" },
      { "id": 9, "cityname": "Surat" },
      { "id": 10, "cityname": "Jaipur" }
    ]
    
   res.send(cities)
});

// app.get('/api/main' , (req ,res) =>{

//    // const Itearray = [
//    //    {
//    //      "dayid": 1,
//    //      "placename": "Calangute Beach",
//    //      "nearbylocation": "Baga Beach",
//    //      "itinerary": "Relax on the beach, try water sports like parasailing or jet skiing, explore nearby markets for souvenirs."
//    //    },
//    //    {
//    //      "dayid": 2,
//    //      "placename": "Old Goa",
//    //      "nearbylocation": "Basilica of Bom Jesus",
//    //      "itinerary": "Visit historic churches like Se Cathedral and Church of St. Francis of Assisi, explore the Archaeological Museum, enjoy authentic Goan cuisine at local restaurants."
//    //    },
//    //    {
//    //      "dayid": 3,
//    //      "placename": "Dudhsagar Falls",
//    //      "nearbylocation": "Bhagwan Mahavir Wildlife Sanctuary",
//    //      "itinerary": "Take a jeep safari through the wildlife sanctuary, trek to Dudhsagar Falls, enjoy swimming and photography at the falls, return to Goa by evening."
//    //    },
//    //    {
//    //       "dayid": 4,
//    //       "placename": "Zuhu beach",
//    //       "nearbylocation": "Main road",
//    //       "itinerary": "Take a jeep safari through the wildlife sanctuary, trek to Dudhsagar Falls, enjoy swimming and photography at the falls, return to Goa by evening."
//    //     },


      
//    //  ]
    
// res.send(Itearray)
// })


app.post('/api/main', async (req, res) => {
   const newtripdata = {
      place: req.body.place,
      startdate: req.body.startDate,
      endate: req.body.endDate,
      description: req.body.description,
      people: req.body.numberOfPeople
   };

   // Log the received data for debugging
   console.log("Received data from frontend:", newtripdata);
  
   




   //   // Define the function to extract text from prediction
      
    // Pass arguments to the generatePrediction function
   
    const prediction = await generatePrediction(`Give  iterinary for travelling to ${newtripdata.place} for starting date from ${newtripdata.startdate}  to end date  ${newtripdata.endate}  with this preferences ${newtripdata.description}`, 500);

    // Use the function to extract text from the prediction
    const senddata = prediction.generations[0];
    console.log(senddata)
    res.send([senddata])

///////////////////////////////////////
  
    // res.send(jokes);


   // You can also send a response back to the client if needed
 //  res.status(200).send("Data received successfully.");

   // Further processing of the data can be done here
});



// app.get('/api/main' , async (req, res) =>{
 


// //   ///////////////////////////////////////

// //   // Define the function to extract text from prediction
      
//     // Pass arguments to the generatePrediction function
   
//     const prediction = await generatePrediction("Give  iterinary for travelling to goa", 100);

//     // Use the function to extract text from the prediction
//     const jokes = prediction.generations[0];
//     console.log(jokes)
//     res.send([jokes])

// ///////////////////////////////////////
  
//     // res.send(jokes);

// }) 







 const port =  3000;

 app.listen(port , () =>{
    console.log(`serve at http://localhost:${port}`)
 })