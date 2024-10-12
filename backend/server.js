import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/test', (req, res) => {
   const test = [
       {
           id: 1,
           name: 'John Doe',
           email: 'kundan@example.com'
       },
       {
           id: 2,
           name: 'Jane Doe',
           email: 'saurabh@example.com'
       }
   ];
   res.send(test);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
    }
);
