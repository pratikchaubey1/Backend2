// // // const express = require('express');

// // // // Create an instance of express
// // // const app = express();

// // // app.listen(5000, () => {
// // //   console.log('Server is running on port 4000');
// // // });

// // // app.get('/', (req, res) => {
// // //   res.send('Hello World! This is the home page.');
// // // });

// // // app.use(express.json());

// // // app.post('/api/car', (request, response) => {
// // //   const { car, price } = request.body;
// // //   console.log(`Car: ${car}, Price: ${price}`);
// // //   response.send('Data received successfully!');
// // // });

// // const  express = require('express');

// // const app = express();

// // app.listen(6000, () => {
// //     console.log('Server is running on port 6000');
// // });

// // app.get('/', (req, res) => {
// //   res.send('Hello World! This is the home page.');
// // });

// // app.use(express.json());

// // app.post('/api/userdetial', (request, response) => {
// //   const { name, age } = request.body;
// //   console.log(`Name: ${name}, Age: ${age}`);
// //   response.send('Data received successfully!');
// // });

// const express = require('express')

// const app = express();

// app.listen(6000, () => {
//   console.log('server is running on port 6000');
  
// });

// app.get('/',(req,res)=>{
//   res.send('hello world! this is the home page ')
// });

// app.use(express.json());

// app.use('/api/login',(req,res)=>{
//   const{email,password}= req.body;
//   console.log(`email: ${email}, password: ${password}`);
//   res.send('Data received successfully')
// });

const express = require('express');
const app = express();

app.listen(6000, () => {
  console.log('server is running on port 6000');
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello world! this is the home page');
});

app.use('/api/login', (req, res) => {
  const { email, password } = req.body;
  console.log(`email: ${email}, password: ${password}`);
  res.send('Data received successfully');
});

// ➕ Sum endpoint
app.post('/api/sum', (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).send('Both num1 and num2 must be numbers.');
  }

  const sum = num1 + num2;
  res.send(`Sum of ${num1} and ${num2} is ${sum}`);
});
