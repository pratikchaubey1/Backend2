// // const express = require('express');

// // // Create an instance of express
// // const app = express();

// // app.listen(5000, () => {
// //   console.log('Server is running on port 4000');
// // });

// // app.get('/', (req, res) => {
// //   res.send('Hello World! This is the home page.');
// // });

// // app.use(express.json());

// // app.post('/api/car', (request, response) => {
// //   const { car, price } = request.body;
// //   console.log(`Car: ${car}, Price: ${price}`);
// //   response.send('Data received successfully!');
// // });

const  express = require('express');

const app = express();

app.listen(6000, () => {
    console.log('Server is running on port 6000');
});

app.get('/', (req, res) => {
  res.send('Hello World! This is the home page.');
});

app.use(express.json());

app.post('/api/userdetial', (request, response) => {
  const { name, age } = request.body;
  console.log(`Name: ${name}, Age: ${age}`);
  response.send('Data received successfully!');
});

