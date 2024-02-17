import User from "../../models/user.js"

const Fetchusers = async(req, res) => {
    try {
        const users = await User.find()
        res.json({ users, success: true })
    } catch (error) {
        console.log(error)
    }
}

export default Fetchusers