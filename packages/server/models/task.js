import mongoose from 'mongoose'

const Schema = mongoose.Schema

const TaskSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    plant: {
        type: String,
        required: true
    },
    tasks: {
        type: [
            [
                {
                    task: {
                        type: String,
                        required: true
                    },
                    done: {
                        type: Boolean,
                        default: false
                    }
                }
            ]
        ],
    }
})

const Task = mongoose.model('Task', TaskSchema);

export default Task