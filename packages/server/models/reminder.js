import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ReminderSchema = new Schema({
            userId: {
                type: String,
                required: true
            },
            time: {
                type: String,
                required: true
            },
            task: {
                type: String,
                required: true
            }
});

const Reminder = mongoose.model('Reminder', ReminderSchema);

export default Reminder;
