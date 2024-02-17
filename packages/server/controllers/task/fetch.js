import Task from "../../models/task.js"

const fetchTask = async(req, res) => {
    try {
        const task = await Task.findOne({ userId: req.params.id, plant: req.params.plant})
        res.send({tasks: task.tasks})
    } catch (error) {
        console.log(error)
    }
}

export default fetchTask