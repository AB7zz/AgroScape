import Task from "../../models/task.js"

const updateTask = async(req, res) => {
    try {
        const task = await Task.findOne({ userId: req.body.id, plant: req.body.plant})

        if(!task){
            const task = new Task({
                userId: req.body.id,
                plant: req.body.plant,
                tasks: req.body.tasks
            })
            task.save()
            return res.send({task})
        }

        task.tasks = req.body.tasks
        task.save()
        res.send({success: true})
    } catch (error) {
        console.log(error)
    }
}

export default updateTask