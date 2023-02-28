import mongoose from "mongoose";
import Task from '../models/tasks.js'

mongoose.connect('mongodb://127.0.0.1:27017/Todo-App');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const testDB = async () => {
    const tasks = new Task({
        id: 24,
        task: 'find a way',
        completed: false
    })
    await tasks.save();
}

testDB().then(() => {
    mongoose.connection.close()
});
