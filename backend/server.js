import express from 'express';
const app = express();

app.get('/', (req,res)=>{
    res.send('Server is ready');
});


app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:'Joke 1',
            content:'Here is Joke 1'
        },
        {
            id:2,
            title:'Joke 2',
            content:'Here is Joke 2'
        },
        {
            id:3,
            title:'Joke 3',
            content:'Here is Joke 3'
        },
        {
            id:4,
            title:'Joke 4',
            content:'Here is Joke 4'
        },
        {
            id:5,
            title:'Joke 5',
            content:'Here is Joke 5'
        }
    ];
    res.send(jokes);
});


const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
});