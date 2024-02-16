import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/
    },
    images: {
        type: [{
            url: {
                type: String,
                required: true,
            },
            title: {
                type: String,
                optional: true,
            },
            description: {
                type: String,
                optional: true,
            },
        }],
        default: [],
    },
    verified: {
        type: Boolean,
        default: false
    },
    code: {
        type: Number
    }
})

const User = mongoose.model('User', UserSchema);

export default User