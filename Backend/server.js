import express from 'express'


 const app = express();

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

app.get('/api/main' , (req ,res) =>{

   const Itearray = [
      {
        "dayid": 1,
        "placename": "Calangute Beach",
        "nearbylocation": "Baga Beach",
        "itinerary": "Relax on the beach, try water sports like parasailing or jet skiing, explore nearby markets for souvenirs."
      },
      {
        "dayid": 2,
        "placename": "Old Goa",
        "nearbylocation": "Basilica of Bom Jesus",
        "itinerary": "Visit historic churches like Se Cathedral and Church of St. Francis of Assisi, explore the Archaeological Museum, enjoy authentic Goan cuisine at local restaurants."
      },
      {
        "dayid": 3,
        "placename": "Dudhsagar Falls",
        "nearbylocation": "Bhagwan Mahavir Wildlife Sanctuary",
        "itinerary": "Take a jeep safari through the wildlife sanctuary, trek to Dudhsagar Falls, enjoy swimming and photography at the falls, return to Goa by evening."
      },
      {
         "dayid": 4,
         "placename": "Zuhu beach",
         "nearbylocation": "Main road",
         "itinerary": "Take a jeep safari through the wildlife sanctuary, trek to Dudhsagar Falls, enjoy swimming and photography at the falls, return to Goa by evening."
       },


      
    ]
    
res.send(Itearray)
})




app.get('/api/jokes' , (req, res) =>{
   const jokes = [
     {
       id: 1,
       title: "Programming Joke",
       content: "Why do programmers prefer dark mode? Because light attracts bugs!"
     },
     {
       id: 2,
       title: "Math Joke",
       content: "Why was the math book sad? Because it had too many problems."
     },
     {
       id: 3,
       title: "Science Joke",
       content: "Why did the biologist install a doorbell? Because he wanted to hear the cell membrane."
     }
   ];
 
     res.send(jokes);
 
 }) 
 


 const port =  3000;

 app.listen(port , () =>{
    console.log(`serve at http://localhost:${port}`)
 })