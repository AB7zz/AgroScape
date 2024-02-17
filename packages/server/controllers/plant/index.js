import Task from "../../models/task.js"

const initPlant = async(req, res) => {
    try {
        console.log(req.body.tasks)
        const task = new Task({
            userId: req.body.id,
            plant: req.body.plant,
            tasks: req.body.tasks
        })
        task.save()
        res.send({task})
    } catch (error) {
        console.log(error)
    }
}

export default initPlant