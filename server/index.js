import express from 'express';
import path from 'path';

const app = express();

app.use(express.static()(path.join(__dirname, 'client/build')));

app.listen(3000, () =>
    console.log('Serving on Port 3000')
)