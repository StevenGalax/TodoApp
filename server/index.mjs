import express from 'express';
import path from 'path';
import data from './data.json' assert {type: 'json'};
import mongoose from 'mongoose';
import Task from './models/tasks.js'
import bodyParser from 'body-parser'

const app = express();

app.use(express.static('client'));
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017/Todo-App');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


app.get("/api/task", async (req, res) => {
    const task = await Task.find({});
    console.log(task)
    res.send(task)
})

app.post("/api/task", async (req, res) => {
    const createTask = new Task({
        id: req.body.id,
        task: req.body.task,
        completed: req.body.complete
    })
    console.log(req.body)
    await createTask.save()
})

app.listen(5000, () =>
    console.log('Serving on Port 5000')
)