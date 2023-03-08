import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    id: Number,
    task: String,
    completed: Boolean
})

export default mongoose.model('Task', TaskSchema);
