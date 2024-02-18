import Task from "../../models/task.js"
import User from "../../models/user.js"

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

        const user = await User.findById(req.body.id)
        user.points = user.points + 10
        user.save()
        res.send({success: true, profile: user})
    } catch (error) {
        console.log(error)
    }
}

export default updateTask