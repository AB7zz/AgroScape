import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ForumSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    comments: {
        type: Array,
        default: []
    }
})

const Forums = mongoose.model('Forums', ForumSchema);

export default Forums