const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000;

//use cors to allow cross origin resource sharing
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));


app.use(express.json());


const pool = require('./database/db');


app.get('/api', async (req,res)=>{


    const name = await pool.query("SELECT * FROM memories");

    console.log(name.rows[0]);


})


app.post('/api', async (req,res)=>{


    try {


    const {memory_title} = req.body;
    const {memory_location} = req.body;
    const {memory_description} = req.body;
    // const {memory_image} = req.body;
    const {memory_date} = req.body;

    console.log(memory_date);



    // const addItem = await pool.query("INSERT INTO memories(memory_title, memory_location, memory_description, memory_image, memory_date) VALUES ($1,$2,$3,$4,$5) RETURNING *", 
    
    // [memory_title,memory_location, memory_description, memory_image,memory_date]);

    const addItem = await pool.query("INSERT INTO memories(memory_title, memory_location, memory_description, memory_date) VALUES ($1,$2,$3,$4) RETURNING *", 
    
    [memory_title,memory_location, memory_description, memory_date]);


   
    console.log(req.body);


    } catch (err) {

        console.error(err.message);
    }
    




  


})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })