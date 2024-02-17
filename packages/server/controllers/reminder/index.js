import Reminder from "../../models/reminder.js"

const setReminder = async(req, res) => {
    try {
        const time = req.body.time
        const userId = req.body.id
        const task = req.body.task
        const reminder = new Reminder({
            userId,
            time,
            task
        })

        reminder.save()

        const allReminders = await Reminder.find({
            userId: req.body.id
        })

        res.send({reminders: allReminders})
    } catch (error) {
        console.log(error)
    }
}

export default setReminder