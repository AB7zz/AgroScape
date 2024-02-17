import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ForumSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    userId: {
        type: Number, // Assuming user ID is a number, you can change it based on your user ID type
        required: true
    },
    comments: {
        type: [
            {
                from: {
                    type: String,
                    required: true
                },
                userId: {
                    type: String,
                    required: true
                },
                comment: {
                    type: String,
                    required: true
                }
            }
        ],
        default: []
    }
});

const Forums = mongoose.model('Forums', ForumSchema);

export default Forums;
