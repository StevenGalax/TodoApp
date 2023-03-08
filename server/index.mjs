import express from 'express';
import mongoose from 'mongoose';
import Task from './models/tasks.js';
import bodyParser from 'body-parser';

const app = express();

app.use(express.static('client'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/Todo-App');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


app.get("/api/task", async (req, res) => {
    const task = await Task.find({});
    res.send(task);
});

app.post("/api/task", async (req, res) => {
    const createTask = new Task({
        id: req.body.id,
        task: req.body.task,
        completed: req.body.complete
    });
    await createTask.save();
    const updatedTask = await Task.find({});
    res.send(updatedTask);
});

app.patch("/api/task", async (req, res) => {
    const { id, complete } = req.body
    const task = await Task.findByIdAndUpdate(id, { completed: complete })
    await task.save();
    res.send('Success');
});

app.delete("/api/task", async (req, res) => {
    const deleteTask = await Task.deleteMany({ completed: true })
    res.send('sucess')
});

app.listen(5000, () =>
    console.log('Serving on Port 5000')
);