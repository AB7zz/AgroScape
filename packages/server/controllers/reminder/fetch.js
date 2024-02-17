import Reminder from "../../models/reminder.js"

const fetchReminder = async(req, res) => {
    try {
        const reminders = await Reminder.find({
            userId: req.params.id
        })
        console.log(reminders)
        res.send({reminders})
    } catch (error) {
        console.log(error)
    }
}

export default fetchReminder